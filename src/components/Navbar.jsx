import React from "react";
import logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
