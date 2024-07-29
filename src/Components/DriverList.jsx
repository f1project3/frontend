import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverList = ({ drivers, addFavorite }) => {
  const loaded = () => {
    return drivers.map((driver, index) => (
      <div key={index} className="driver">
        <Link to={`/driver/${driver._id}`}>
          <h1>{driver.full_name}</h1>
        </Link>
        <img src={driver.headshot_url} alt={driver.full_name} />
        <h3>{driver.team}</h3>
        <button onClick={() => addFavorite('drivers', driver)}>Add to Favorites</button>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{drivers ? loaded() : loading()}</section>;
};

export default DriverList;
