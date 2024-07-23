import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DriverList from '../Components/DriverList';

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('/api/drivers')
      .then(response => {
        setDrivers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the drivers!', error);
      });
  }, []);

  return (
    <div>
      <h1>F1 Drivers</h1>
      <DriverList drivers={drivers} />
    </div>
  );
}

export default DriversPage;
