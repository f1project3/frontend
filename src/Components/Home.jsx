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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<div id="welcome">Welcome to the F1 App</div>} />
        <Route path="/teams" element={<TeamList teams={teams} addFavorite={addFavorite} />} />
        <Route path="/teams/:id" element={<TeamDetail teams={teams} />} />
        <Route path="/driver" element={<DriverList drivers={drivers} addFavorite={addFavorite} />} />
        <Route path="/driver/:id" element={<DriverDetails drivers={drivers} />} />
        <Route path="/following" element={<Following favorites={favorites} removeFavorite={removeFavorite} />} />
      </Routes>
    </main>
  );
};

export default Home;
