import { FaUserCircle } from "react-icons/fa";
import { iComment } from "../../interfaces/iComment";
import "./comments.css";

type CommentsProps = {
  comment: iComment;
};

const Comments = ({ comment }: CommentsProps) => {
  return (
    <div className="comments-content">
      <div className="comments-content-user-information">
        <FaUserCircle size={50} color="white" />
        <div className="comments-content-user-texts">
          <h3>
            {comment.User.username}
            <span>- {new Date(comment.createdAt).toLocaleString()}</span>
          </h3>
          <p>{comment.text}</p>
        </div>
      </div>
      {/* <div className="comments-content-thumbs">
        <button>
          <FiThumbsUp size={25} color="white" />
        </button>
        <button>
          <FiThumbsDown size={25} color="white" />
        </button>
      </div> */}
    </div>
  );
};

export default Comments;
