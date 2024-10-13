//import React from 'react';
import CourseCard from "../../components/courseCard/CourseCard";
import { CourseData } from "../../context/CourseContext";
import "./Courses.css";
const Courses = () => {
    const {courses} = CourseData();

    console.log(courses);
    
  return (
    <div className="courses">
        <h2>Available Courses</h2>

        <div className="course-container">
            {
                courses && courses.length>0 ? courses.map((e)=>(
                    <CourseCard key={e._id} course={e}/>
                )) :( <p>No Courses yet!</p>
           )}
        </div>
    </div>
  )
}

export default Courses