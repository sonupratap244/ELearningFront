//import React from 'react'
import Testimonials from "../../components/testimonials/Testimonials";
import "./Home.css";
import { useNavigate } from "react-router-dom";
//import AOS from "aos";
//import "aos/dist/aos.css";
//import { useEffect } from "react";


  

const Home = () => {


  const navigate = useNavigate();
  return (
     <div>
      <div className="home">
        <div className="home-content">
          <h1 data-aos="fade-down"
     data-aos-easing="linear" data-aos-duration="1500">Welcome to Our Vinayak Study-Zone.</h1>
          <h2 data-aos="fade-up"
     data-aos-duration="3000">Unlock Your Career Potential by <br/>Learning Any Skill</h2>
          <p>Start Your Online Tutoring or Consultation Marketplace with Study-Zone.</p>
          <button onClick={()=>navigate("/courses")} className="common-btn" data-aos="flip-right">Get Started</button>
        </div>
      </div>
      <Testimonials/>
     </div> 
  );
};

export default Home;