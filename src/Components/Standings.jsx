import React from 'react';

const Standings = ({ standings }) => {
  return (
    <div>
      <h2>Current Standings</h2>
      <ul>
        {standings.map(standing => (
          <li key={standing.team}>
            {standing.team}: {standing.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Standings;
