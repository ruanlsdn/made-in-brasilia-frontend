import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import { iPost } from "../../interfaces/iPost";
import { listAllPostImagesRequest } from "../../services/api";
import "./places-card.css";

type PlacesCardProps = {
  place: iPost;
};

const PlacesCard = ({ place }: PlacesCardProps) => {
  const [image, setImage] = useState<string>("");

  const fetchImages = async () => {
    try {
      const response = await listAllPostImagesRequest(place.id);
      const base64 = `data:image/jpeg;base64,${response.data[0]}`;
      setImage(base64);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="places-card-container places-card-container-hover scale-up-center">
      <img style={{ objectFit: "cover" }} src={image} alt="image" />
      <div className="places-card-content">
        <h1>{place.name}</h1>
        <p>{place.text}</p>
        <Rating readonly initialValue={5} />
        <Link state={{ place: place }} to={`/single-place/${place.id}`}>
          <button className="gradient-bg-colorful">
            <span>Saiba mais</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlacesCard;
