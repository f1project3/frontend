import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DriverDetails = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const response = await fetch(`https://localhost:4000/[driver]/${id}`); 
        setDriver(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching driver data:", error);
        setLoading(false);
      }
    };

    fetchDriver();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!driver) {
    return <div>Driver not found</div>;
  }

  return (
    <div className="driver-details">
      <h1>{driver.name}</h1>
      <img src={driver.image} alt={driver.name} />
      <p>Team: {driver.team}</p>
      <p>Country: {driver.country}</p>
      <p>Podiums: {driver.podiums}</p>
      <p>Points: {driver.points}</p>
    </div>
  );
};

export default DriverDetails;
