import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DriverList = ({ addFavorite, drivers, deleteDriver }) => {
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  useEffect(() => {
    setFilteredDrivers(drivers);
  }, [drivers]);

  const handleAddFavorite = (driver) => {
    addFavorite('drivers', driver);
  };

  const handleDeleteDriver = (id) => {
    deleteDriver(id);
  };

  const loaded = () => {
    return filteredDrivers.map((driver, index) => (
      <div key={index} className="driver">
        <Link to={`/driver/${driver._id}`}>
          <h1>{driver.full_name}</h1>
        </Link>
        <button onClick={() => handleAddFavorite(driver)}>Add to Favorites</button>
        <button onClick={() => handleDeleteDriver(driver._id)}>Delete Driver</button>
      </div>
    ));
  };

  return <section>{filteredDrivers.length ? loaded() : <h1>Loading...</h1>}</section>;
};

export default DriverList;
