import React from 'react';

const DriverDetails = ({ driver }) => {
  return (
    <div>
      <h2>{driver.name}</h2>
      <p>Age: {driver.age}</p>
      <p>Team: {driver.team}</p>
      <h3>Stats</h3>
      <ul>
        {driver.stats.map(stat => (
          <li key={stat}>{stat}</li>
        ))}
      </ul>
    </div>
  );
}

export default DriverDetails;
