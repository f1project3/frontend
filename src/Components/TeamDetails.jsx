import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div>
      <h2>{team.name}</h2>
      <p>{team.history}</p>
      <h3>Drivers</h3>
      <ul>
        {team.drivers.map(driver => (
          <li key={driver}>{driver}</li>
        ))}
      </ul>
      <p>Standing: {team.standing}</p>
    </div>
  );
}

export default TeamDetails;
