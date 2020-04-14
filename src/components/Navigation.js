import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
  return (
    <div className="nav">
      <Link to="/"><span id="homebutton">Home</span></Link>
      {/* <Link to="/about">About </Link>
      <Link to="/detail"> Detail</Link> */}
      
    </div>
  );
}

export default Navigation;