import React from "react";
import { FiMessageSquare, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthControlContext } from "../../contexts/AuthControlContext";

type NavbarLinksProps = {
  title: string;
  isActive: boolean;
};

const NavbarLinks = ({ title, isActive }: NavbarLinksProps) => {
  const { signOut } = useAuthControlContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-links">
        <button
          className="navbar-links-item "
          onClick={() => {
            if (isActive) navigate(-1);
          }}
        >
          <span>{title}</span>
        </button>
      </div>
      <div className="navbar-options">
        <button onClick={() => navigate("/chats")}>
          <FiMessageSquare size={30} />
        </button>
        <a
          href="/"
          onClick={() => {
            signOut();
          }}
        >
          <FiUser size={30} />
        </a>
      </div>
    </>
  );
};

export default NavbarLinks;
