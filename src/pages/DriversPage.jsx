import React, { useState, useEffect } from 'react';
import { getDrivers } from '../services/ergastApi';
import DriverList from '../Components/DriverList';

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then(setDrivers).catch(console.error);
  }, []);

  return (
    <div>
      <h1>F1 Drivers</h1>
      <DriverList drivers={drivers} />
    </div>
  );
}

export default DriversPage;
