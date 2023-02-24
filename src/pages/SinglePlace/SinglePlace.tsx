import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Comments, Navbar } from "../../components";
import { SINGLE_PLACE_PAGE } from "../../constants/static-texts";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { iCreateCommentDto } from "../../interfaces/iCreateCommentDto";
import { iCreatePostRatingDto } from "../../interfaces/iCreatePostRatingDto";
import { iPost } from "../../interfaces/iPost";
import { iPostRatings } from "../../interfaces/iPostRating";
import {
  calculatePostRateAvgRequest,
  createCommentRequest,
  createPostRatingRequest,
  existsUserVote,
  listAllCommentsRequest,
  listAllPostImagesRequest,
} from "../../services/api";
import "./single-place.css";

const SinglePlace = () => {
  const { user } = useAuthControlContext();
  const { state } = useLocation();
  const post: iPost = state.place;
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState([]);
  const [refreshComments, setRefreshComments] = useState(false);
  const [image, setImage] = useState<string[]>([]);
  const [rate, setRate] = useState<iPostRatings | null>(null);
  const [isPostVoted, setIsPostVoted] = useState(false);
  const [newRate, setNewRate] = useState(0);
  const [refreshRating, setRefreshRating] = useState(false);

  const handlePaginationChange = async (page: number) => {
    try {
      const response = await listAllCommentsRequest(page - 1, post.id);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleRatingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dto: iCreatePostRatingDto = {
        rate: newRate,
        postId: post.id,
        userId: user?.id!,
      };
      const response = await createPostRatingRequest(dto);
      setRefreshRating((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await listAllPostImagesRequest(post.id);
      const base64Array = response.data.map(
        (image: string) => `data:image/jpeg;base64,${image}`
      );
      setImage(base64Array);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await listAllCommentsRequest(0, post.id);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRating = async () => {
    try {
      const response = await calculatePostRateAvgRequest(post.id);
      setRate(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const canUserVote = async () => {
    try {
      const response = await existsUserVote(user!.id);
      setIsPostVoted(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    fetchRating();
    canUserVote();
  }, [refreshRating]);

  useEffect(() => {
    fetchComments();
  }, [refreshComments]);

  return (
    <>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <div className="single-place-content scale-up-hor-center">
        <div className="single-place-carousel">
          <Carousel
            axis="horizontal"
            showStatus={false}
            showThumbs={false}
            infiniteLoop
          >
            {image.map((img, index) => (
              <div key={index}>
                <img
                  style={{ objectFit: "fill" }}
                  className="carousel-img"
                  src={img}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="single-place-carousel-description">
          <div className="single-place-carousel-description-texts">
            <a href={post?.location} target={"_blank"}>
              <FaMapMarkedAlt size={80} color={"white"} />
            </a>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>{post.PostCategory.description}</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>{`${post?.openDay} - ${post?.closeDay}`}</p>
          </div>
          <div className="single-place-carousel-description-texts">
            <p>{`${post?.openTime} - ${post?.closeTime}`}</p>
          </div>
          <div className="single-place-carousel-description-texts">
            {rate && rate.avg != null ? (
              <>
                <Rating
                  SVGstyle={{
                    height: "30px",
                  }}
                  className="single-place-stars"
                  readonly
                  initialValue={rate.avg}
                  allowFraction
                />
                <p>{`Nota:  ${rate.avg}`}</p>
                <p>{`Total de votos: ${rate.count}`}</p>
              </>
            ) : (
              <>
                <Rating
                  SVGstyle={{
                    height: "30px",
                  }}
                  className="single-place-stars"
                  readonly
                  initialValue={0}
                />
                <p>{`Nota:  ${0}`}</p>
                <p>{`Total de votos: ${0}`}</p>
              </>
            )}
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
        {!isPostVoted && (
          <>
            <h1 className="single-place-rate-header gradient-text">
              {SINGLE_PLACE_PAGE.title_rating_section}
            </h1>
            <form className="single-place-rate" onSubmit={handleRatingSubmit}>
              <Rating
                className="single-place-stars"
                initialValue={0}
                onClick={(rate) => setNewRate(rate)}
              />
              <button
                type="submit"
                className="gradient-bg-colorful"
                style={{ marginTop: "1rem" }}
              >
                <span>{SINGLE_PLACE_PAGE.text_button_rating_section}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default SinglePlace;
