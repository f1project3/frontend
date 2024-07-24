import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DriverDetail = (props) => {
  const params = useParams();
  const id = params.id;
  const [driver, setDriver] = useState(null);

  const URL = `http://localhost:4000/drivers/${id}`;

  const getDriver = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDriver(data.data);
  };

  useEffect(() => {
    getDriver();
  }, []);

  const loaded = () => {
    return (
      <div className="driver">
        <h1>{driver.name}</h1>
        <h2>{driver.team}</h2>
        <img src={driver.image} alt={driver.name} />
        <h3>{driver.nationality}</h3>
        <p>{driver.championships}</p>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{driver ? loaded() : loading()}</section>;
};

export default DriverDetail;
