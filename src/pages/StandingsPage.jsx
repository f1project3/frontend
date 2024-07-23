import React, { useState, useEffect } from 'react';
import { getStandings } from '../services/ergastApi';
import Standings from '../Components/Standings';

const StandingsPage = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings().then(setStandings).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Current F1 Standings</h1>
      <Standings standings={standings} />
    </div>
  );
}

export default StandingsPage;
