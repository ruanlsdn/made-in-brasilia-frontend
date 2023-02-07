import React from "react";
import "./ToggleMenu.css";

type ToggleMenuProps = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleMenu = ({ setter }: ToggleMenuProps) => {
  return (
    <div className="toggle-menu">
      <a
        className="navbar-links-item"
        href="#header"
        onClick={() => setter(false)}
      >
        <div className="toggle-menu-marker gradient-bg-colorful" />
        <span>HOME</span>
      </a>
      <a
        className="navbar-links-item"
        href="#features"
        onClick={() => setter(false)}
      >
        <div className="toggle-menu-marker gradient-bg-colorful" />
        <span>SOBRE</span>
      </a>
      <a
        className="navbar-links-item"
        href="#footer"
        onClick={() => setter(false)}
      >
        <div className="toggle-menu-marker gradient-bg-colorful" />
        <span>FOOTER</span>
      </a>
      <a className=" navbar-links-item" href="#" onClick={() => setter(false)}>
        <div className="toggle-menu-marker gradient-bg-colorful" />
        <span>LOGIN</span>
      </a>
    </div>
  );
};

export default ToggleMenu;
