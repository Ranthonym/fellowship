import React from "react";
import "./home.css";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
