import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeamList = () => {
  const [teams, setTeams] = useState(null);

  const URL = "http://localhost:4000/teams/";

  const getTeams = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTeams(data.data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const loaded = () => {
    return teams.map((team) => (
      <div key={team._id} className="team">
        <Link to={`/teams/${team._id}`}>
          <h1>{team.name}</h1>
        </Link>
        <img src={team.logo} alt={team.name} />
        <h3>{team.principal}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{teams ? loaded() : loading()}</section>;
};

export default TeamList;
