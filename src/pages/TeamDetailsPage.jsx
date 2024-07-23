import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamDetails } from '../services/ergastApi';
import TeamDetails from '../Components/TeamDetails';

const TeamDetailsPage = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getTeamDetails(id).then(setTeam).catch(console.error);
  }, [id]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TeamDetails team={team} />
    </div>
  );
}

export default TeamDetailsPage;

