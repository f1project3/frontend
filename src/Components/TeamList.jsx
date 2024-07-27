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
    return teams.map((team, index) => (
      <div key={index} className="team">
        <Link to={`/teams/${team.team_name}`}>
          <h1>{team.team_name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{teams ? loaded() : loading()}</section>;
};

export default TeamList;
