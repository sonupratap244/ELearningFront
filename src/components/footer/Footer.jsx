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
            &copy; 2024 Vinayak Study Zone Platform. All rights reserved. <br/>
            Study with ❤ <a href="">Vinay Sir</a>
        </p>
        <div className="social-links">
            <a href="https://telegram.me/vinayakstudyzone97"><FaTelegram/></a>
            <a href="http://www.instagram.co/vinayakstudyzone"><FaInstagramSquare/></a>
            <a href=""><FaTwitter/></a>
        </div>
       </div>
    </footer>
  );
};

export default Footer;