import { Route, Routes } from "react-router-dom";
import TeamList from "../Components/TeamList";
import TeamDetail from "../Components/TeamDetail";
import DriverList from "../Components/DriverList";
import DriverDetail from "../Components/DriverDetails";
import Standings from "../Components/Standings";

const Home = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Welcome to the F1 App</div>} />
        <Route path="/teams" element={<TeamList />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/drivers/:id" element={<DriverDetail />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </main>
  );
};

export default Home;
