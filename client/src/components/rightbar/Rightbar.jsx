import React from "react";
import "./rightbar.css";
import { CakeOutlined } from "@material-ui/icons";

import { Users } from "../../testData";
import Online from "../online/Online";

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
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
