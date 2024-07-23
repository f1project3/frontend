import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DriverDetails from '../Components/DriverDetails';

const DriverDetailsPage = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    axios.get(`/api/drivers/${id}`)
      .then(response => {
        setDriver(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the driver!', error);
      });
  }, [id]);

  if (!driver) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DriverDetails driver={driver} />
    </div>
  );
}

export default DriverDetailsPage;
