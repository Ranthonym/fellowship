import React from "react";
import "./navbar.css";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Fellowship</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Lookup stuff" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <div className="navbarLink">Homepage</div>
          <div className="navbarLink">Timeline</div>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">3</span>
          </div>
        </div>
        <img src="assets/person/norm.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
