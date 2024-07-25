import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/drivers">Drivers</Link>
        </li>
        <li>
          <Link to="/standings">Standings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;