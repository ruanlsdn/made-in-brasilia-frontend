import { FiSun } from "react-icons/fi";
import "./footer.css";
import FooterLink from "./FooterLink";

type Links = {
  title: string;
  path: string;
};

export type FooterLinks = {
  group: string;
  links: Links[];
};

const FOOTER_LINKS: FooterLinks[] = [
  {
    group: "Contact us",
    links: [
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
    ],
  },
  {
    group: "Contact us",
    links: [
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
    ],
  },
  {
    group: "Contact us",
    links: [
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
      {
        title: "Dummy Linkedin",
        path: "http://www.dummy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <FiSun size={50} color={"white"} />
      <div className="footer-content">
        {FOOTER_LINKS.map((item, index) => (
          <FooterLink key={index} group={item.group} links={item.links} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
