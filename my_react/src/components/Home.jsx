import React from "react";
import Navigationbar from "./Navigationbar";
import "./Home.css"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar"

export default function Home(){
  return(
    <div>

      <Navigationbar />
      
      <div className="bodyContainer">

        <Sidebar />
        <Feed />
        <Rightbar />
      
      </div>



    </div>
  )
}