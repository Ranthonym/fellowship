import React, { useState } from "react";
import {
  Favorite,
  FavoriteBorderOutlined,
  MoreVert,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./post.css";

import { Users } from "../../testData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                PF +
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.title}</span>
          <img src={PF + post.photo} alt="" className="postImg" />
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
