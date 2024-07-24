import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className='nav'>
      <Link to="/">
        <div>Teams</div>
      </Link>
      <Link to="/drivers">
        <div>Drivers</div>
      </Link>
      <Link to="/standings">
        <div>Standings</div>
      </Link>
    </nav>
  );
};

export default Header;
