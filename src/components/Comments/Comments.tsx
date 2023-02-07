import React from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import "./comments.css";

type CommentsProps = {
  username: string;
  text: string;
};

const Comments = ({ username, text }: CommentsProps) => {
  return (
    <div className="comments-content">
      <div className="comments-content-user-information">
        <FaUserCircle size={50} color="white" />
        <div className="comments-content-user-texts">
          <h3>{username}</h3>
          <p>{text}</p>
        </div>
      </div>
      <div className="comments-content-thumbs">
        <button>
          <FiThumbsUp size={25} color="white" />
        </button>
        <button>
          <FiThumbsDown size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Comments;
