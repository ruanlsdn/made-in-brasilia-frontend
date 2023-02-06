import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FiSun, FiUser } from "react-icons/fi";

const Navbar = () => {
  const isLoggedIn: boolean = false;
  return (
    <div className="navbar-container" id="header">
      <FiSun size={35} color={"white"} />
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <div className="navbar-links" style={{ cursor: "pointer" }}>
            <a className="navbar-links-item" href="#header">
              <span>HOME</span>
            </a>
            <a className="navbar-links-item" href="#features">
              <span>FUNCIONALIDADES</span>
            </a>
            <a className="navbar-links-item" href="#footer">
              <span>FOOTER</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
