import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import TeamList from './TeamList';
import TeamDetail from './TeamDetail';
import DriverList from './DriverList';
import DriverDetails from './DriverDetails';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('http://localhost:4000/teams');
      const data = await response.json();
      setTeams(data);
    };

    const fetchDrivers = async () => {
      const response = await fetch('http://localhost:4000/players');
      const data = await response.json();
      setDrivers(data);
    };


    Promise.all([fetchTeams(), fetchDrivers()]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Welcome to the F1 App</div>} />
        <Route path="/teams" element={<TeamList teams={teams} />} />
        <Route path="/teams/:id" element={<TeamDetail teams={teams} />} />
        <Route path="/drivers" element={<DriverList drivers={drivers} />} />
        <Route path="/drivers/:id" element={<DriverDetails drivers={drivers} />} />
      </Routes>
    </main>
  );
};

export default Home;
