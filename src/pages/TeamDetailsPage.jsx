import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TeamDetails from '../Components/TeamDetails';

const TeamDetailsPage = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    axios.get(`/api/teams/${id}`)
      .then(response => {
        setTeam(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the team!', error);
      });
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

