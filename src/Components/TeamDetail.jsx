import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TeamDetail = (props) => {
  const params = useParams();
  const id = params.id;
  const [team, setTeam] = useState(null);

  const URL = `http://localhost:4000/teams/${id}`;

  const getTeam = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTeam(data.data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  const loaded = () => {
    return (
      <div className="team">
        <h1>{team.name}</h1>
        <h2>{team.principal}</h2>
        <img src={team.logo} alt={team.name} />
        <h3>{team.base}</h3>
        <p>{team.championships}</p>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{team ? loaded() : loading()}</section>;
};

export default TeamDetail;
