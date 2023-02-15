import { useState } from "react";
import { FiMessageSquare, FiSun, FiUser, FiMenu } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleMenu } from "..";
import { useApplicationControlContext } from "../../contexts/ApplicationControlContext";
import "./navbar.css";

const Navbar = () => {
  const { previousLocation } = useApplicationControlContext();
  const isLoggedIn: boolean = true;
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="navbar-container" id="header">
        <FiSun className="logo" size={35} color={"white"} />
        {isLoggedIn && pathname.includes("single-place") && (
          <>
            <div className="navbar-links">
              <NavLink
                className="navbar-links-item"
                to={previousLocation?.pathname}
              >
                <span>LUGARES</span>
              </NavLink>
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
        )}
        {isLoggedIn && pathname.includes("/place") && (
          <>
            <div className="navbar-links">
              <NavLink className="navbar-links-item" to={"/cities"}>
                <span>CIDADES</span>
              </NavLink>
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
        )}
        {isLoggedIn && pathname.includes("/cities") && (
          <>
            <div className="navbar-title">
              <h3 className="navbar-links-item">BRASÍLIA DE A-Z</h3>
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
        )}
        {!isLoggedIn && (
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
            <a className="navbar-links navbar-links-item" href="">
              <span>LOGIN</span>
            </a>
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
