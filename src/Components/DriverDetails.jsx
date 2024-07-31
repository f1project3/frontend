import { useParams, Link } from "react-router-dom";

const DriverDetails = ({ drivers }) => {
  const { id } = useParams();
  const driver = drivers.find((driver) => driver._id === id);

  return (
    <div>
      <h1>{driver.full_name}</h1>
      <img src={driver.headshot_url} alt={driver.full_name} />
      <h3>{driver.team}</h3>
      <Link to={`/drivers/update/${driver._id}`}>
        <button>Update Driver</button>
      </Link>
    </div>
  );
};

export default DriverDetails;
