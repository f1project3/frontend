import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamList from '../Components/TeamList';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('/api/teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the teams!', error);
      });
  }, []);

  return (
    <div>
      <h1>F1 Teams</h1>
      <TeamList teams={teams} />
    </div>
  );
}

export default TeamsPage;
