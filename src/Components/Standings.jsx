import { useEffect, useState } from "react";

const Standings = () => {
  const [standings, setStandings] = useState(null);

  const URL = "http://localhost:4000/standings/";

  const getStandings = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setStandings(data.data);
  };

  useEffect(() => {
    getStandings();
  }, []);

  const loaded = () => {
    return standings.map((standing, index) => (
      <div key={index} className="standing">
        <h1>{standing.position}</h1>
        <h2>{standing.driver}</h2>
        <h3>{standing.team}</h3>
        <p>{standing.points}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{standings ? loaded() : loading()}</section>;
};

export default Standings;
