import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { iPost } from "../../interfaces/iPost";
import { iPostRatings } from "../../interfaces/iPostRating";
import {
  calculatePostRateAvgRequest,
  listAllPostImagesRequest,
} from "../../services/api";
import "./places-card.css";

type PlacesCardProps = {
  place: iPost;
};

const PlacesCard = ({ place }: PlacesCardProps) => {
  const [image, setImage] = useState<string>("");
  const [rate, setRate] = useState<iPostRatings | null>(null);

  const fetchImages = async () => {
    try {
      const response = await listAllPostImagesRequest(place.id);
      const base64 = `data:image/jpeg;base64,${response.data[0]}`;
      setImage(base64);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRatings = async () => {
    try {
      const response = await calculatePostRateAvgRequest(place.id);
      setRate(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchRatings();
  }, []);

  return (
    <div className="places-card-container places-card-container-hover scale-up-center">
      <img style={{ objectFit: "cover" }} src={image} alt="image" />
      <div className="places-card-content">
        <h1>{place.name}</h1>
        <p>{place.text}</p>
        {rate ? (
          <Rating readonly allowFraction initialValue={rate.avg} />
        ) : (
          <Rating readonly initialValue={0} />
        )}
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
