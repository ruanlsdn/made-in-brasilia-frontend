import React from "react";
import "./about.css";
import AboutBlock from "./AboutBlock";

type AboutData = {
  title: string;
  text: string;
};

const ABOUT_DATA: AboutData[] = [
  {
    title: "Lorem ipsum dolor sit ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const About = () => {
  return (
    <div className="about" id="features">
      <div className="about-content">
        <div className="about-content-title">
          <h1 className="gradient-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            delectus, adipisci sequi eum labore a. Non et aliquid ipsam
            consequuntur! Veniam sed quasi ex saepe rerum tenetur velit
            recusandae rem?
          </p>
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
