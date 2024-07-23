import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDriverDetails } from '../services/ergastApi';
import DriverDetails from '../Components/DriverDetails';

const DriverDetailsPage = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    getDriverDetails(id).then(setDriver).catch(console.error);
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
