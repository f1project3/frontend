import React from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ teams }) => {
  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(team => (
          <li key={team._id}>
            <Link to={`/teams/${team._id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
