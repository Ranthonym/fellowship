import React from "react";
import "./rightbar.css";
import { CakeOutlined } from "@material-ui/icons";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeOutlined className="birthdayIcon" />
          <span className="birthdayText">
            <b>Jean-Luc</b> and <b>2 other buddies</b> have a birthday today
          </span>
        </div>
        <img src="assets/spicyramen.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online buddies</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/norm.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jean-Luc</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/norm.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jean-Luc</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
