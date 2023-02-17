import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import dummy_bar from "../../assets/dummy_bar.jpg";
import { Comments, Navbar } from "../../components";
import { SINGLE_PLACE_PAGE } from "../../constants/static-texts";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { iCreateCommentDto } from "../../interfaces/iCreateCommentDto";
import { iPost } from "../../interfaces/iPost";
import {
  createCommentRequest,
  listAllCommentsRequest,
} from "../../services/api";
import "./single-place.css";

// 2aa942ef-7b0d-410e-baf9-fb5afc065b0c
const SinglePlace = () => {
  const { state } = useLocation();
  const post: iPost = state.place;
  const [comment, setComment] = useState<string>("");
  const [refreshComments, setRefreshComments] = useState(false);
  const [comments, setComments] = useState([]);
  const { user } = useAuthControlContext();

  const handlePaginationChange = async (page: number) => {
    try {
      const response = await listAllCommentsRequest(page - 1, post.id);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dto: iCreateCommentDto = {
        text: comment,
        postId: post.id,
        userId: user?.id!,
      };
      const response = await createCommentRequest(dto);
      setRefreshComments((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
    setComment("");
  };

  const fetchComments = async () => {
    try {
      const response = await listAllCommentsRequest(0, post.id);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refreshComments]);

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
            <p>Categoria</p>
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
        <h1 className="single-place-rate-header gradient-text">
          {SINGLE_PLACE_PAGE.title_comments_section}
        </h1>
        <form className="single-place-rate" onSubmit={handleSubmit}>
          <textarea
            maxLength={100}
            placeholder={SINGLE_PLACE_PAGE.placeholder_text_comments_section}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="gradient-bg-colorful">
            <span>{SINGLE_PLACE_PAGE.text_button_comments_section}</span>
          </button>
        </form>
        <div className="single-place-comments">
          {comments.map((comment, index) => (
            <Comments key={index} comment={comment} />
          ))}
          <Pagination
            style={{ background: "white", borderRadius: "15px" }}
            color="standard"
            count={999}
            onChange={(e, page) => handlePaginationChange(page)}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePlace;
