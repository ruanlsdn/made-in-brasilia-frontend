import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import { Comments, Navbar } from "../../components";
import { SINGLE_PLACE_PAGE } from "../../constants/static-texts";
import { iCreateCommentDto } from "../../interfaces/iCreateCommentDto";
import { iSinglePost } from "../../interfaces/iSinglePost";
import {
  createCommentRequest,
  findUniquePostRequest,
} from "../../services/api";
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

// 2aa942ef-7b0d-410e-baf9-fb5afc065b0c
const SinglePlace = () => {
  const [post, setPost] = useState<iSinglePost | null>(null);
  const [comment, setComment] = useState<string>("");
  const { placeId } = useParams();
  const [refreshPostData, setRefreshData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dto: iCreateCommentDto = {
        text: comment,
        postId: placeId,
        userId: "2aa942ef-7b0d-410e-baf9-fb5afc065b0c",
      };
      const response = await createCommentRequest(dto);
      setRefreshData((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
    setComment("");
  };

  const fetchPost = async () => {
    try {
      const response = await findUniquePostRequest(placeId);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [refreshPostData]);

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
            <p>{`${post?.openDay} - ${post?.closeDay}`}</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>{`${post?.openTime} - ${post?.closeTime}`}</p>
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
          <h1>{post?.name}</h1>
          <p>{post?.text}</p>
        </div>
        <div className="single-place-comments">
          {post?.Comment.map((comment, index) => (
            <Comments
              key={index}
              username={comment.User.username}
              text={comment.text}
            />
          ))}
        </div>
        <h1 className="single-place-rate-header gradient-text">
          {SINGLE_PLACE_PAGE.title_comments_section}
        </h1>
        <form className="single-place-rate" onSubmit={handleSubmit}>
          <textarea
            maxLength={100}
            placeholder={SINGLE_PLACE_PAGE.placeholder_text_comments_section}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="gradient-bg-colorful">
            <span>{SINGLE_PLACE_PAGE.text_button_comments_section}</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SinglePlace;
