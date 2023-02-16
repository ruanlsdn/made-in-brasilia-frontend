import { Link } from "react-router-dom";
import dummy_bsb from "../../assets/dummy_bsb.jpg";
import { iCity } from "../../interfaces/iCity";
import "./cities-card.css";

type CityDataProps = {
  index: number;
  city: iCity;
};

const CitiesCard = ({ index, city }: CityDataProps) => {
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
        <Link state={{ cityId: city.id }} to={"/places"}>
          <button className="cities-card-link gradient-bg-colorful">
            <span> Visite!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CitiesCard;
