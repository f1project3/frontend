import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverList = () => {
  const [drivers, setPlayers] = useState(null);

  const URL = "http://localhost:4000/drivers"; 

  const getDrivers = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPlayers(data.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);

  const loaded = () => {
    return drivers.map((driver, index) => (
      <div key={index} className="driver">
        <Link to={`/drivers/${driver.driver}`}>
          <h1>{driver.driver.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{drivers ? loaded() : loading()}</section>;
};

export default DriverList;
