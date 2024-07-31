import React, { useState } from 'react';

const AddTeam = ({ addTeam }) => {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = { team_name: teamName };
    addTeam(newTeam);
    setTeamName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="addTeam">Add New Team</h2>
      <input id="addTeamName"
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        required
      />
      <button type="submit">Add Team</button>
    </form>
  );

};

export default AddTeam;
