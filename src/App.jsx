import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import DriverDetails from "./Components/DriverDetails";
import Standings from "./Components/Standings";
import DriverList from "./Components/DriverList";
import TeamDetail from "./Components/TeamDetail";
import TeamList from "./Components/TeamList";


import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <DriverDetails />
      <Standings />
      <DriverList />
      <TeamDetail />
      <TeamList />
    </div>
  );
}

export default App;
