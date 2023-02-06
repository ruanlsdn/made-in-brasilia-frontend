import React from "react";
import "./about-block.css";

type AboutBlockProps = {
  title: string;
  text: string;
};

const AboutBlock = ({ title, text }: AboutBlockProps) => {
  return (
    <div className="about-block">
      <div className="gradient-bg-colorful about-block-marker" />
      <div className="about-block-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutBlock;
