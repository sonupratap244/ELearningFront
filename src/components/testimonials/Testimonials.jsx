//import React from 'react'
import "./Testimonials.css";
import anuska from "./Image/anuska.jpg"
import vansh from "./Image/vansh.jpg";
import divyanshi from "./Image/divyanshi.jpg";
import img1 from "./Image/img1.jpg";


const Testimonials = () => {

    const testimonialsData = [
        {
          id: 1,
          name: "Anushka",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          
          image: anuska,
        },
        {

          id: 2,
          name: "Vansh yadav",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            vansh,
        },
        {
          id: 3,
          name: "Divyanshi",
          position: "Student",
          message:
          "The instructors are very knowledgeable, and the platform's structure is easy to follow.",
          image:
            divyanshi,
        },
        {
          id: 4,
          name: "Aman Kumar",
          position: "Student",
          message:
            "I love the interactive courses! They really made learning so much more engaging and enjoyable.",
          image:
            img1,
        },
      ];

  return (
    <section className="testimonials"> 
      <h2 data-aos="fade-down">What our student say</h2>
      <div className="testimonials-cards"   data-aos="zoom-in"
     data-aos-duration="3000">
          {
            testimonialsData.map((e)=>(
                <div className="testimonial-card" key={e.id}>
                    <div className="student-image">
                        <img src={e.image}/>
                    </div>
                    <p className="message">{e.message}</p>
                    <div className="info">
                        <p className="name">{e.name}</p>
                        <p className="position">{e.position}</p>
                    </div>
                </div>
            ))
          }
      </div>
    </section>
  )
}

export default Testimonials