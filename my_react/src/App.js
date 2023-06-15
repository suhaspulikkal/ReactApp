import React from "react";
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";

function App(){
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      
      )
}

export default App;