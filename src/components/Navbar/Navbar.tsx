import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FiSun, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <FiSun size={35} color={"white"} />
      <div className="navbar-links">
        <NavLink className="navbar-links-item" to={""}>
          <span>HOME</span>
        </NavLink>
        <NavLink className="navbar-links-item" to={""}>
          <span>LUGARES</span>
        </NavLink>
        <NavLink className="navbar-links-item" to={""}>
          <span>INSTITUIÇÕES</span>
        </NavLink>
      </div>
      <div className="navbar-links-logout">
        <button>
          <FiUser size={30} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
