import { useState } from "react";
import { FiMenu, FiMessageSquare, FiSun, FiUser } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { ToggleMenu } from "..";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import "./navbar.css";

const Navbar = () => {
  const { user, signOut } = useAuthControlContext();
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container" id="header">
        <FiSun className="logo" size={35} color={"white"} />
        {user && pathname.includes("single-place") && (
          <>
            <div className="navbar-links">
              <button
                className="navbar-links-item "
                onClick={() => navigate(-1)}
              >
                <span>LUGARES</span>
              </button>
            </div>
            <div className="navbar-options">
              <button>
                <FiMessageSquare size={30} />
              </button>
              <button
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
              >
                <FiUser size={30} />
              </button>
            </div>
          </>
        )}
        {user && pathname.includes("/place") && (
          <>
            <div className="navbar-links">
              <button
                className="navbar-links-item "
                onClick={() => navigate(-1)}
              >
                <span>CIDADES</span>
              </button>
            </div>
            <div className="navbar-options">
              <button>
                <FiMessageSquare size={30} />
              </button>
              <button
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
              >
                <FiUser size={30} />
              </button>
            </div>
          </>
        )}
        {user && pathname.includes("/cities") && (
          <>
            <div className="navbar-title">
              <h3 className="navbar-links-item">BRASÍLIA DE A-Z</h3>
            </div>
            <div className="navbar-options">
              <button>
                <FiMessageSquare size={30} />
              </button>
              <button
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
              >
                <FiUser size={30} />
              </button>
            </div>
          </>
        )}
        {!user && (
          <>
            <div className="navbar-links" style={{ cursor: "pointer" }}>
              <a className="navbar-links-item" href="#header">
                <span>HOME</span>
              </a>
              <a className="navbar-links-item" href="#features">
                <span>SOBRE</span>
              </a>
              <a className="navbar-links-item" href="#footer">
                <span>FOOTER</span>
              </a>
            </div>
            <button
              className="navbar-links navbar-links-item"
              onClick={() => navigate("/login")}
            >
              <span>LOGIN</span>
            </button>
            <button
              className="navbar-menu-icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <FiMenu size={30} color="white" />
            </button>
          </>
        )}
      </div>
      <div>{toggleMenu && <ToggleMenu setter={setToggleMenu} />}</div>
    </>
  );
};

export default Navbar;
