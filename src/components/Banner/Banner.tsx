import React from "react";
import "./banner.css";
import brasilia_banner from "../../assets/brasilia_banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-content-texts">
          <h1 className="gradient-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consectetur ipsa ex minima facilis amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            possimus, obcaecati consequatur quod sit, aliquid exercitationem
            accusamus ea laborum dicta repellat nesciunt, quo totam atque
            dolores veniam voluptatem. Blanditiis, reprehenderit.
          </p>
        </div>
        <div className="banner-content-img">
          <img src={brasilia_banner} alt="catedral" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
