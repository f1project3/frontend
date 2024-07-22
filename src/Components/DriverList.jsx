import React from 'react';
import { Link } from 'react-router-dom';

const DriverList = ({ drivers }) => {
  return (
    <div>
      <h2>Drivers</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver._id}>
            <Link to={`/drivers/${driver._id}`}>{driver.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriverList;
