import React from "react";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/kaguya1.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/norm.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Norm</h4>
              <span className="profileInfoDesc">
                And the moth says, “‘Cause the light was on."
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
