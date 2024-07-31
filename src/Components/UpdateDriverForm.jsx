import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateDriverForm = ({ updateDriver }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState({
    full_name: '',
    team: '',
    headshot_url: '',
  });

  useEffect(() => {
    const fetchDriver = async () => {
      const response = await fetch(`http://localhost:4000/driver/${id}`);
      const data = await response.json();
      setDriver(data);
    };
    fetchDriver();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting updated driver:', driver);
    await updateDriver(driver);
    navigate(`/driver/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Driver</h2>
      <label>
        Full Name:
        <input
          type="text"
          name="full_name"
          value={driver.full_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Team:
        <input
          type="text"
          name="team"
          value={driver.team}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Headshot URL:
        <input
          type="text"
          name="headshot_url"
          value={driver.headshot_url}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Update Driver</button>
    </form>
  );
};

export default UpdateDriverForm;
