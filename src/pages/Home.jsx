import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Hamburger 34 </h1>
        <p>
          Delicius Hamburgers <br /> with 34 Spicy Mixed
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
