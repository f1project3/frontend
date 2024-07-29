
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeamList = ({ teams, addFavorite }) => {
  const loaded = () => {
    return teams.map((team, index) => (
      <div key={index} className="team">
        <Link to={`/teams/${team.team_name}`}>
          <h1>{team.team_name}</h1>
        </Link>
        <button onClick={() => addFavorite('teams', team)}>Add to Favorites</button>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{teams ? loaded() : loading()}</section>;
};

export default TeamList;

