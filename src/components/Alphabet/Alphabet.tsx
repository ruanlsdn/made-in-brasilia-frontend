import React from "react";
import "./alphabet.css";

type AlphabetProps = {
  path: string;
};

const Alphabet = ({ path }: AlphabetProps) => {
  const ALFHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="alphabet">
      {ALFHABET.map((letter, index) => (
        <a className="gradient-text" key={index} href="#">
          {letter}
          <p>-</p>
        </a>
      ))}
    </div>
  );
};

export default Alphabet;
