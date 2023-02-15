import { Link, useLocation } from "react-router-dom";
import dummy_bsb from "../../assets/dummy_bsb.jpg";
import { useApplicationControlContext } from "../../contexts/ApplicationControlContext";
import { iCity } from "../../interfaces/iCity";
import "./cities-card.css";

type CityDataProps = {
  index: number;
  city: iCity;
};

const CitiesCard = ({ index, city }: CityDataProps) => {
  const { setPreviousLocation } = useApplicationControlContext();
  const location = useLocation();
  return (
    <div
      className={`cities-card-container  ${
        index % 2 === 0 ? "" : "cities-card-container-reverse"
      }`}
    >
      <img src={dummy_bsb} alt="dummy_bsb" />
      <div className="cities-card-texts">
        <h1>{city.title}</h1>
        <p>{city.text}</p>
        <Link to={`/places/${city.id}`}>
          <button
            className="cities-card-link gradient-bg-colorful"
            onClick={() => setPreviousLocation(location)}
          >
            <span> Visite!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CitiesCard;
