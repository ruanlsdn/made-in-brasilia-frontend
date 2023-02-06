import dummy_bsb from "../../assets/dummy_bsb.jpg";
import "./cities-card.css";

type CityDataProps = {
  index: number;
  title: string;
  history: string;
};

const CitiesCard = ({ index, title, history }: CityDataProps) => {
  return (
    <div
      className={`cities-card-container  ${
        index % 2 === 0 ? "" : "cities-card-container-reverse"
      }`}
    >
      <img src={dummy_bsb} alt="dummy_bsb" />
      <div className="cities-card-texts">
        <h1>{title}</h1>
        <p>{history}</p>
        <button className="cities-card-link gradient-bg-colorful">
          <span> Veja mais!</span>
        </button>
      </div>
    </div>
  );
};

export default CitiesCard;
