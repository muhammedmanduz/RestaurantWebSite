import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2025 burger34.com </p>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Footer;
