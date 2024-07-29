import React from 'react';
import { Link } from 'react-router-dom';

const Following = ({ favorites }) => {
  const loaded = () => {
    return (
      <div>
        <h1>Favorite Teams</h1>
        {favorites.teams.map((team, index) => (
          <div key={index} className="team">
            <Link to={`/teams/${team.team_name}`}>
              <h1>{team.team_name}</h1>
            </Link>
          </div>
        ))}
        <h1>Favorite Drivers</h1>
        {favorites.drivers.map((driver, index) => (
          <div key={index} className="driver">
            <Link to={`/driver/${driver._id}`}>
              <h1>{driver.full_name}</h1>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return <h1>No favorites added yet.</h1>;
  };

  return <section>{favorites ? loaded() : loading()}</section>;
};

export default Following;
