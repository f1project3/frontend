import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverList = () => {
  const [drivers, setDrivers] = useState(null);

  const URL = "https://api.openf1.org/v1/drivers";

  const getDrivers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDrivers(data);
  };

  useEffect(() => {
    getDrivers();
  }, []);

  const loaded = () => {
    return drivers.map((driver) => (
      <div key={driver.id} className="driver">
        <Link to={`/drivers/${driver.id}`}>
          <h1>{driver.name}</h1>
        </Link>
        <img src={driver.image} alt={driver.name} />
        <h3>{driver.team}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{drivers ? loaded() : loading()}</section>;
};

export default DriverList;
