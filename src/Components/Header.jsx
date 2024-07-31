import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <div className="containerTwo">
    <div className="logo">
    <img src={"./src/assets/photos/f1_logo.png"} style={{height:100, width:100}} alt="f1 logo"/>
    </div>
    </div>
  );
};

export default Header;
