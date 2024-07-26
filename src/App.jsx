// src/App.jsx
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
