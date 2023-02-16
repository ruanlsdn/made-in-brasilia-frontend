import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import { iPost } from "../../interfaces/iPost";
import "./places-card.css";

type PlacesCardProps = {
  place: iPost;
};

const PlacesCard = ({ place }: PlacesCardProps) => {
  return (
    <div className="places-card-container places-card-container-hover">
      <img src={dummy_bar} alt="dummy_bar" />
      <div className="places-card-content">
        <h1>{place.name}</h1>
        <p>{place.text}</p>
        <Rating readonly initialValue={5} />
        <Link state={{ place: place }} to={"/single-place"}>
          <button className="gradient-bg-colorful">
            <span>Saiba mais</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlacesCard;
