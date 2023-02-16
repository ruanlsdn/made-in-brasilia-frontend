import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy_bsb from "../../assets/dummy_bsb.jpg";
import { iCity } from "../../interfaces/iCity";
import { listAllCityImagesRequest } from "../../services/api";
import "./cities-card.css";

type CityDataProps = {
  index: number;
  city: iCity;
};

const CitiesCard = ({ index, city }: CityDataProps) => {
  // const [image, setImage] = useState();
  // const fetchImages = async () => {
  //   try {
  //     const response = await listAllCityImagesRequest();
  //     const buffer = response.data[0].content.data;
  //     const blob = new Blob(buffer, { type: "image/jpeg" });
  //     const url = URL.createObjectURL(blob);
  //     setImage(url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchImages();
  // }, []);

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
