import {
  FavoriteBorderOutlined,
  MoreVert,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/person/norm.jpeg"
              alt=""
            />
            <span className="postUsername">Norm</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            And the moth says, “‘Cause the light was on.”
          </span>
          <img src="/assets/person/norm.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAltOutlined className="likeIcon" />
            <FavoriteBorderOutlined className="likeIcon" />
            <span className="postLikeCounter">24 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
