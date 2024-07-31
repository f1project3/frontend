import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ addFavorite, teams }) => {
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    setFilteredTeams(teams);
  }, [teams]);

  const handleAddFavorite = (team) => {
    addFavorite('teams', team);
  };

  const loaded = () => {
    return filteredTeams.map((team, index) => (
      <div key={index} className="team">
        <Link to={`/teams/${team.team_name}`}>
          <h1>{team.team_name}</h1>
        </Link>
        <button onClick={() => handleAddFavorite(team)}>Add to Favorites</button>
      </div>
    ));
  };

  return <section>{filteredTeams.length ? loaded() : <h1>Loading...</h1>}</section>;
};
export default TeamList;
