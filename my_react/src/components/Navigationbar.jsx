import React from "react";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

export default function Navigationbar(){
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return(
    <div className="navigationContainer">

        <div className="naviLeft">
          <span className="logo">ReactApp</span>
        </div>

        <div className="naviCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Seacrh what you want" className="searchInput" />
          </div>
        </div>
        
        <div className="naviRight">

          <div className="naviLinks">
            <span className="navilink"><a href="/">Homepage </a></span>
            <span className="navilink"><a href="profile"> Timeline </a></span>
          </div>

        <div className="topbaricons">
          <div className="navIcons">
            <Person />
            <span className="navIconBadge">1</span>
          </div>

          <div className="navIcons">
            <Chat />
            <span className="navIconBadge">2</span>
          </div> 

          <div className="navIcons">
            <Notifications />
            <span className="navIconBadge">1</span>
          </div>
          </div>
          <img className="profilePicture" alt="ProfilePic" src="assets/joker.jpg" />
          </div>
    </div>
    
  )
}