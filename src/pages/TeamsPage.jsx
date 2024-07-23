import React, { useState, useEffect } from 'react';
import { getTeams } from '../services/ergastApi';
import TeamList from '../Components/TeamList';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then(setTeams).catch(console.error);
  }, []);

  return (
    <div>
      <h1>F1 Teams</h1>
      <TeamList teams={teams} />
    </div>
  );
}

export default TeamsPage;
