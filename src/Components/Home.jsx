import { Route, Routes } from "react-router-dom";
import TeamList from "./TeamList";
import TeamDetail from "./TeamDetail";
import DriverList from "./DriverList";
import DriverDetails from "./DriverDetails";
import Standings from "./Standings";

const Home = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Welcome to the F1 App</div>} />
        <Route path="/teams" element={<TeamList />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/drivers/:id" element={<DriverDetails />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </main>
  );
};

export default Home;
