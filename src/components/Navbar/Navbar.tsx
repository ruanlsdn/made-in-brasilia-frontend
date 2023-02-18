import { useState } from "react";
import { FiMenu, FiSun } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarLinks, ToggleMenu } from "..";
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
        {user && pathname.includes("/cities") && (
          <NavbarLinks title="BRASÍLIA DE A-Z" isActive={false} />
        )}
        {user && pathname.includes("/place") && (
          <NavbarLinks title="CIDADES" isActive={true} />
        )}
        {user && pathname.includes("single-place") && (
          <NavbarLinks title="LUGARES" isActive={true} />
        )}
        {user && pathname.includes("/chats") && (
          <NavbarLinks title="VOLTAR" isActive={true} />
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
