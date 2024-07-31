import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamList from './TeamList';
import TeamDetail from './TeamDetail';
import DriverList from './DriverList';
import DriverDetails from './DriverDetails';
import Following from './Following';
import Header from './Header'
import AddTeam from './AddTeam';
import AddDriver from './AddDriver';
import UpdateTeamForm from './UpdateTeamForm';
import UpdateDriverForm from './UpdateDriverForm';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [favorites, setFavorites] = useState({ teams: [], drivers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('http://localhost:4000/teams');
      const data = await response.json();
      setTeams(data.data);
    };

    const fetchDrivers = async () => {
      const response = await fetch('http://localhost:4000/driver');
      const data = await response.json();
      setDrivers(data.data);
    };

    Promise.all([fetchTeams(), fetchDrivers()]).then(() => {
      setLoading(false);
    });
  }, []);

  const addFavorite = (type, item) => {
    if (favorites[type].some(favorite => favorite._id === item._id)) {
      toast.warn(`${item.full_name || item.team_name} is already in favorites!`);
      return;
    }

    setFavorites((prev) => ({
      ...prev,
      [type]: [...prev[type], item],
    }));
    toast.success(`${item.full_name || item.team_name} has been added to favorites!`);
  };

  const removeFavorite = (type, id) => {
    setFavorites((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item._id !== id),
    }));
    toast.info(`${type === 'drivers' ? 'Driver' : 'Team'} has been removed from favorites.`);
  };

  const addTeam = async (newTeam) => {
    const response = await fetch('http://localhost:4000/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeam),
    });
    const data = await response.json();
    setTeams([...teams, data]);
    toast.success('Team added successfully!');
  };

  const addDriver = async (newDriver) => {
    const response = await fetch('http://localhost:4000/driver', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDriver),
    });
    const data = await response.json();
    setDrivers([...drivers, data]);
    toast.success('Driver added successfully!');
  };

  const updateTeam = async (updatedTeam) => {
    try {
      console.log(updatedTeam)
      const response = await fetch(`http://localhost:4000/teams/${updatedTeam._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTeam),
      });
      if (response.ok) {
        const data = await response.json();
        setTeams(teams.map((team) => (team._id === data._id ? data : team)));
        toast.success('Team updated successfully!');
      } else {
        console.error('Failed to update team');
        toast.error('Failed to update team');
      }
    } catch (error) {
      console.error('Error updating team:', error);
      toast.error('Error updating team');
    }
  };
  

  const updateDriver = async (updatedDriver) => {
    const response = await fetch(`http://localhost:4000/driver/${updatedDriver._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedDriver),
    });
    const data = await response.json();
    console.log('Updated driver response:', data);
    setDrivers(drivers.map((driver) => (driver._id === data._id ? data : driver)));
    toast.success('Driver updated successfully!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<div id="welcome">Welcome to the F1 App</div>} />
        <Route
          path="/teams"
          element={
            <>
              <AddTeam addTeam={addTeam} />
              <TeamList addFavorite={addFavorite} teams={teams} />
            </>
          }
        />
        <Route path="/teams/:id" element={<TeamDetail teams={teams} />} />
        <Route
          path="/driver"
          element={
            <>
              <AddDriver addDriver={addDriver} />
              <DriverList addFavorite={addFavorite} drivers={drivers} />
            </>
          }
        />
        <Route path="/driver/:id" element={<DriverDetails drivers={drivers} />} />
        <Route
          path="/following"
          element={
            <Following favorites={favorites} removeFavorite={removeFavorite} />
          }
        />
        <Route path="/teams/update/:id" element={<UpdateTeamForm updateTeam={updateTeam} />} />
        <Route path="/drivers/update/:id" element={<UpdateDriverForm updateDriver={updateDriver} />} />
      </Routes>
    </main>
  );
};

export default Home;
