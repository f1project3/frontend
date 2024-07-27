import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverList = () => {
  const [drivers, setDrivers] = useState(null);
  const URL = "http://localhost:4000/players/";

console.log(drivers)

  const getDrivers = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setDrivers(data.data);
  };

  useEffect(() => {

    getDrivers();

  }, []);
  
  const loaded = () => {
    return drivers.map((driver, index) => (
      <div key={index} className="driver">
        <Link to={`/drivers/${driver._id}`}>
          <h1>{driver.full_name}</h1>
        </Link>
        <img src={driver.headshot_url} alt={driver.full_name} />
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