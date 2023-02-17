import { FiSun } from "react-icons/fi";
import { HOME_PAGE } from "../../constants";
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
    group: `${HOME_PAGE.title_group3_footer}`,
    links: [
      {
        title: `${HOME_PAGE.title_link6_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
      {
        title: `${HOME_PAGE.title_link7_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
    ],
  },
  {
    group: `${HOME_PAGE.title_group1_footer}`,
    links: [
      {
        title: `${HOME_PAGE.title_link1_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
      {
        title: `${HOME_PAGE.title_link2_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
    ],
  },

  {
    group: `${HOME_PAGE.title_group2_footer}`,
    links: [
      {
        title: `${HOME_PAGE.title_link3_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
      {
        title: `${HOME_PAGE.title_link4_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
      {
        title: `${HOME_PAGE.title_link5_footer}`,
        path: `${HOME_PAGE.path1_footer}`,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer gradient-bg" id="footer">
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
