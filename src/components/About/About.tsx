import React from "react";
import { HOME_PAGE } from "../../constants";
import "./about.css";
import AboutBlock from "./AboutBlock";

type AboutData = {
  title: string;
  text: string;
};

const ABOUT_DATA: AboutData[] = [
  {
    title: `${HOME_PAGE.title_functionality1_body}`,
    text: `${HOME_PAGE.description_functionality1_body}`,
  },
  {
    title: `${HOME_PAGE.title_functionality2_body}`,
    text: `${HOME_PAGE.description_functionality2_body}`,
  },
  {
    title: `${HOME_PAGE.title_functionality3_body}`,
    text: `${HOME_PAGE.description_functionality3_body}`,
  },
  {
    title: `${HOME_PAGE.title_functionality4_body}`,
    text: `${HOME_PAGE.description_functionality4_body}`,
  },
  {
    title: `${HOME_PAGE.title_functionality5_body}`,
    text: `${HOME_PAGE.description_functionality5_body}`,
  },
];

const About = () => {
  return (
    <div className="about" id="features">
      <div className="about-content">
        <div className="about-content-title">
          <h1 className="gradient-text">{HOME_PAGE.title_body}</h1>
          <p>{HOME_PAGE.description_body}</p>
        </div>
        <div className="about-content-functinality">
          {ABOUT_DATA.map((item, index) => (
            <AboutBlock key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
