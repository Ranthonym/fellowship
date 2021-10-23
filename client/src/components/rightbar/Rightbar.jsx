import React from "react";
import "./rightbar.css";
import { CakeOutlined } from "@material-ui/icons";

import { Users } from "../../testData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">user info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Toronto</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Favorite Pokemon:</span>
            <span className="rightbarInfoValue">Snorlax</span>
          </div>
        </div>
        <h4 className="rightbarTitle">user buddies</h4>
        <div className="rightbarFollowingList">
          <div className="rightbarFollowing">
            <img
              src="assets/person/norm.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jean-Luc</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/norm.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Old Man River</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
