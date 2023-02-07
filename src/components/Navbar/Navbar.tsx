import { FiMessageSquare, FiSun, FiUser } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const isLoggedIn: boolean = true;

  return (
    <div className="navbar-container" id="header">
      <FiSun size={35} color={"white"} />
      {isLoggedIn ? (
        <>
          <div className="navbar-title">
            <h3 className="gradient-text">Brasília de A-Z</h3>
          </div>
          <div className="navbar-options">
            <button>
              <FiMessageSquare size={30} />
            </button>
            <button>
              <FiUser size={30} />
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
          <a className="navbar-links navbar-links-item" href="">
            <span>LOGIN</span>
          </a>
        </>
      )}
    </div>
  );
};

export default Navbar;
