import { useLocation } from "react-router-dom";
import { useDataControlContext } from "../../contexts/DataControlContext";
import "./alphabet.css";

const Alphabet = () => {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const { cities, setFilteredCities, posts, setFilteredPosts } =
    useDataControlContext();
  const { pathname } = useLocation();

  const handleClick = (letter: string) => {
    if (pathname.includes("cities")) {
      switch (letter) {
        case "*":
          setFilteredCities(cities);
          break;

        default:
          const newCities = cities.filter((city) =>
            city.name.toUpperCase().startsWith(letter.toUpperCase())
          );
          setFilteredCities(newCities);
          break;
      }
    } else {
      switch (letter) {
        case "*":
          setFilteredPosts(posts);
          break;

        default:
          const newPosts = posts.filter((post) =>
            post.name.toUpperCase().startsWith(letter.toUpperCase())
          );
          setFilteredPosts(newPosts);
          break;
      }
    }
  };

  return (
    <div className="alphabet">
      <button
        className="gradient-text"
        onClick={() => {
          handleClick("*");
        }}
      >
        *<p>-</p>
      </button>
      {ALPHABET.map((letter, index) => (
        <button
          className="gradient-text"
          key={index}
          onClick={() => {
            handleClick(letter);
          }}
        >
          {letter}
          <p>-</p>
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
