import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Standings from '../Components/Standings';

const StandingsPage = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios.get('/api/standings')
      .then(response => {
        setStandings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the standings!', error);
      });
  }, []);

  return (
    <div>
      <h1>Current F1 Standings</h1>
      <Standings standings={standings} />
    </div>
  );
}

export default StandingsPage;
