import React from "react";
import { Alphabet, Navbar, PlacesCard } from "../../components";
import "./places.css";

type PlaceData = {
  title: string;
  summary: string;
  rate: number;
};

const PLACES_DATA: PlaceData[] = [
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
    rate: 5,
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",

    rate: 5,
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
    rate: 5,
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
    rate: 5,
  },
];

const Places = () => {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Alphabet path="" />
      </div>
      <div className="places-content">
        {PLACES_DATA.map((place, index) => (
          <PlacesCard
            key={index}
            title={place.title}
            summary={place.summary}
            rate={place.rate}
          />
        ))}
      </div>
    </>
  );
};

export default Places;
