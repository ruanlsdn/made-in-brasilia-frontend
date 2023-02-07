import React from "react";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import "./places-card.css";

type PlacesCardProps = {
  title: string;
  summary: string;
  rate: number;
};

const PlacesCard = ({ title, summary, rate }: PlacesCardProps) => {
  return (
    <div className="places-card-container places-card-container-hover">
      <img src={dummy_bar} alt="dummy_bar" />
      <div className="places-card-content">
        <h1>{title}</h1>
        <p>{summary}</p>
        <Rating readonly initialValue={rate} />
        <button className="gradient-bg-colorful">
          <span>Saiba mais</span>
        </button>
      </div>
    </div>
  );
};

export default PlacesCard;
