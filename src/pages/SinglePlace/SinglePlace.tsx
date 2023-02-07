import { Carousel } from "react-responsive-carousel";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import { Comments, Navbar } from "../../components";
import "./single-place.css";

type CommentsData = {
  username: string;
  text: string;
};

const COMMENTS_DATA: CommentsData[] = [
  {
    username: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere ipsa temporibus.",
  },
  {
    username: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere ipsa temporibus.",
  },
  {
    username: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere ipsa temporibus.",
  },
];

const SinglePlace = () => {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <div className="single-place-content">
        <div className="single-place-carousel">
          <Carousel
            axis="horizontal"
            showStatus={false}
            showThumbs={false}
            infiniteLoop
          >
            <div>
              <img className="carousel-img" src={dummy_bar} />
            </div>
            <div>
              <img className="carousel-img" src={dummy_bar} />
            </div>
            <div>
              <img className="carousel-img" src={dummy_bar} />
            </div>
          </Carousel>
        </div>
        <div className="single-place-carousel-description">
          <div className="single-place-carousel-description-texts">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <Rating
              SVGstyle={{
                height: "30px",
              }}
              className="single-place-stars"
              readonly
              initialValue={5}
            />
            <p>5</p>
          </div>
        </div>
        <div className="single-place-description">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            laborum quae facere aliquid dolorum sunt, labore fugiat possimus cum
            eius vero ipsam voluptate in, quaerat nostrum iure officiis alias
            libero.
          </p>
        </div>
        <div className="single-place-comments">
          {COMMENTS_DATA.map((comment, index) => (
            <Comments
              key={index}
              username={comment.username}
              text={comment.text}
            />
          ))}
        </div>
        <h1 className="single-place-rate-header gradient-text">
          Lorem, ipsum dolor sit!
        </h1>
        <div className="single-place-rate">
          <textarea maxLength={100} placeholder="Leave a comment..." />
          <button className="gradient-bg-colorful">
            <span>Lorem, ipsum</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePlace;
