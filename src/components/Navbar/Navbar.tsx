import { useState } from "react";
import { FiMenu, FiArrowLeft, FiSun, FiChevronLeft } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarLinks, ToggleMenu } from "..";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useDataControlContext } from "../../contexts/DataControlContext";
import "./navbar.css";

const Navbar = () => {
  const { user } = useAuthControlContext();
  const { selectedCity, selectedPost } = useDataControlContext();
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container" id="header">
        {user && pathname.includes("/cities") && (
          <>
            <FiSun className="logo" size={35} color={"white"} />
            <NavbarLinks title="BRASÍLIA DE A-Z" />
          </>
        )}
        {user && pathname.includes("/place") && (
          <>
            <button className="navbar-links-item" onClick={() => navigate(-1)}>
              <FiChevronLeft size={35} color={"white"} />
            </button>
            <NavbarLinks title={selectedCity?.name!} />
          </>
        )}
        {user && pathname.includes("single-place") && (
          <>
            <button className="navbar-links-item" onClick={() => navigate(-1)}>
              <FiChevronLeft size={35} color={"white"} />
            </button>
            <NavbarLinks title={selectedPost?.name!} />
          </>
        )}
        {user && pathname.includes("/chats") && <NavbarLinks title="VOLTAR" />}

        {!user && (
          <>
            <FiSun className="logo" size={35} color={"white"} />
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
