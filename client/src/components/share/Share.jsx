import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="assets/person/norm.jpeg"
            alt=""
          />
          <input placeholder="Sup?" type="text" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptiontext">Gallery</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptiontext">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptiontext">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptiontext">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
