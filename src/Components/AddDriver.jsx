import React, { useState } from 'react';

const AddDriver = ({ addDriver }) => {
  const [fullName, setFullName] = useState('');
  const [team, setTeam] = useState('');
  const [headshotUrl, setHeadshotUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = { full_name: fullName, team, headshot_url: headshotUrl };
    addDriver(newDriver);
    setFullName('');
    setTeam('');
    setHeadshotUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Driver</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Headshot URL"
        value={headshotUrl}
        onChange={(e) => setHeadshotUrl(e.target.value)}
        required
      />
      <button type="submit">Add Driver</button>
    </form>
  );
};

export default AddDriver;
