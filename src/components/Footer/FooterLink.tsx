import React from "react";
import { FooterLinks } from "./Footer";
import "./footer-links.css";

const FooterLink = ({ group, links }: FooterLinks) => {
  return (
    <div className="footer-link">
      <h3>{group}</h3>
      {links.map((link, index) => (
        <div>
          <a href="#">{link.title}</a>
        </div>
      ))}
    </div>
  );
};

export default FooterLink;
