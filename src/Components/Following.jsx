import React from 'react';
import { Link } from 'react-router-dom';

const Following = ({ favorites, removeFavorite }) => {
  const loaded = () => {
    return (
      <div classname="following">
        <h1>Favorite Teams</h1>
        {favorites.teams.map((team, index) => (
          <div key={index} className="team">
            <Link to={`/teams/${team.team_name}`}>
              <h1>{team.team_name}</h1>
            </Link>
            <button onClick={() => removeFavorite('teams', team._id)}>Remove from Favorites</button>
          </div>
        ))}
        <div className="containerFour">
        <div id="faveDriver">
        <h1>Favorite Drivers</h1>
        {favorites.drivers.map((driver, index) => (
          <div key={index} className="driver">
            <Link to={`/driver/${driver._id}`}>
              <h1>{driver.full_name}</h1>
            </Link>
            <button onClick={() => removeFavorite('drivers', driver._id)}>Remove from Favorites</button>
          </div>
          
        ))}
        </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1 className='noFaves'>No favorites added yet.</h1>;
  };

  return <section>{favorites.teams.length > 0 || favorites.drivers.length > 0 ? loaded() : loading()}</section>;
};

export default Following;
