import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTeamForm = ({ updateTeam }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState({
    team_name: '',
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`http://localhost:4000/teams/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTeam(data.data); 
        } else {
          console.error('Team not found');
        }
      } catch (error) {
        console.error('Error fetching team:', error);
      }
    };
    fetchTeam();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTeam(team);
    navigate(`/teams/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Team</h2>
      <label>
        Team Name:
        <input
          type="text"
          name="team_name"
          value={team.team_name}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Update Team</button>
    </form>
  );
};

export default UpdateTeamForm;
