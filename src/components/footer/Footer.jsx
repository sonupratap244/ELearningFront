//import React from 'react'
import { FaTelegram,FaTwitter } from "react-icons/fa6";
//import { FaTwitter } from "react-icons/fa6";

import { FaInstagramSquare } from "react-icons/fa";


import "./Footer.css";
const Footer = () => {
  return (
    <footer>
       <div className="footer-content">
        <p>
            &copy; 2024 Your Study-Zone Platform. All rights reserved. <br/>
            Made with ❤ <a href="">Son Pratap</a>
        </p>
        <div className="social-links">
            <a href="https://t.me/hypnosis_039"><FaTelegram/></a>
            <a href="https://www.instagram.com/_hypnosis_039 "><FaInstagramSquare/></a>
            <a href=""><FaTwitter/></a>
        </div>
       </div>
    </footer>
  );
};

export default Footer;