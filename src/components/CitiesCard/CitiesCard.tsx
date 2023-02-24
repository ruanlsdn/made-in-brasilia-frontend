import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dummy_bsb from "../../assets/dummy_bsb.jpg";
import { useDataControlContext } from "../../contexts/DataControlContext";
import { iCity } from "../../interfaces/iCity";
import { listAllCityImagesRequest } from "../../services/api";
import "./cities-card.css";

type CityDataProps = {
  index: number;
  city: iCity;
};

const CitiesCard = ({ index, city }: CityDataProps) => {
  const [image, setImage] = useState<string>("");
  const { setSelectedCity } = useDataControlContext();

  const fetchImages = async () => {
    try {
      const response = await listAllCityImagesRequest(city.id);
      const base64 = `data:image/jpeg;base64,${response.data}`;
      setImage(base64);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div
      className={`cities-card-container scale-up-center  ${
        index % 2 === 0 ? "" : "cities-card-container-reverse scale-up-center"
      }`}
    >
      <img src={image} alt="image" />
      <div className="cities-card-texts">
        <h1>{city.title}</h1>
        <p>{city.text}</p>
        <Link to={`/places/${city.id}`}>
          <button
            className="cities-card-link gradient-bg-colorful"
            onClick={() => setSelectedCity(city)}
          >
            <span> Visite!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CitiesCard;
