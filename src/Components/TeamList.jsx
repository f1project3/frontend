import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ addFavorite, teams, deleteTeam }) => {
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    setFilteredTeams(teams);
  }, [teams]);

  const handleAddFavorite = (team) => {
    addFavorite('teams', team);
  };

  const handleDelete = (id) => {
    deleteTeam(id);
  };

  const loaded = () => {
    return filteredTeams.map((team, index) => (
      <div key={index} className="team">
        <Link to={`/teams/${team._id}`}>
          <h1 >{team.team_name}</h1>
        </Link>
        <button onClick={() => handleAddFavorite(team)}>Add to Favorites</button>
        <button onClick={() => handleDelete(team._id)}>Delete Team</button>
        </div>
    ));
  };

  return <section>{filteredTeams.length ? loaded() : <h1>Loading...</h1>}</section>;
};

export default TeamList;
