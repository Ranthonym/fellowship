import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import {
  Favorite,
  FavoriteBorderOutlined,
  MoreVert,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./post.css";

// import { Users } from "../../testData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || PF + "person/norm.jpeg"}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.title}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {isLiked ? (
              <>
                <ThumbUpAlt className="likeIcon" onClick={likeHandler} />
                <Favorite className="likeIcon" onClick={likeHandler} />
              </>
            ) : (
              <>
                <ThumbUpAltOutlined
                  className="likeIcon"
                  onClick={likeHandler}
                />

                <FavoriteBorderOutlined
                  className="likeIcon"
                  onClick={likeHandler}
                />
              </>
            )}
            <span className="postLikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
