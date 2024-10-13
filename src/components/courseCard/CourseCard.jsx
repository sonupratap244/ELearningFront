// import { useNavigate } from "react-router-dom";
// import { UserData } from "../../context/UserContext";
// import { server } from "../../main";
// import "./CourseCard.css";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { CourseData } from "../../context/CourseContext";


// const CourseCard = ({course}) => {
//     const navigate = useNavigate();
//     const {user,isAuth} = UserData();

//     const {fetchCourses} = CourseData();


//     const deleteHandler = async (id) => {
//         if (window.confirm("Are you sure you want to delete this course?")) {
//           try {
//             // Corrected template literal with backticks
//             const { data } = await axios.delete(`${server}/api/course/${id}`, {
//               headers: {
//                 token: localStorage.getItem("token"),
//               },
//             });
      
//             // Show success message
//             toast.success(data.message);
      
//             // Refresh the courses after deletion
//             fetchCourses();
//           } catch (error) {
//             // Handle errors safely
//             const message = error.response && error.response.data ? error.response.data.message : "Something went wrong!";
//             toast.error(message);
//           }
//         }
//       };
      
    

// //     const deleteHandler = async(id) => {
// //         if(confirm("Are you sure you want to delete this course")){
// //             try {
// //                 // const {data} = await axios.delete(`${server}/api/course/${id}`,{
// //                     const {data} = await axios.delete(`http://localhost:5000/api/course/${id}`,{
// //                  headers:{
// //                    token:localStorage.getItem("token"),
// //                  },
// //                 }) ;
// //                 toast.success(data.message);
// //                 fetchCourses();
// //              } catch (error) {
// //                  toast.error(error.response.data.message);
// //              }
// //         }
// //    };

//   return (
//     <div className="course-card">
//         <img src={`${server}/${course.image}`} 
//         alt="" className="course-image"/>
//         <h3>{course.title}</h3>
//         <p>Instructor- {course.createdBy}</p>
//         <p>Duration- {course.duration} weeks</p>
//         <p>Price- ₹{course.price}</p>
//         {
//             isAuth ?  (
//                 <>
//                 {user && user.role !=="admin" ? (
//                     <>
//                     {
//                         user.subscription.includes(course._id) ?  (
//                         <button onClick={()=>
//                            navigate(`/course/study/${course._id}`)} 
//                             className="common-btn">
//                                 Study</button> 
//                     ) : ( <button onClick={()=>navigate(`/course/${course._id}`)} 
//                     className="common-btn">
//                         Get Started
//                         </button>
        
//                     )}
//                     </>
//                 ) : ( 
//                     <button onClick={()=>navigate(`/course/study/${course._id}`)}
//                  className="common-btn">Study</button>
//                 )}
//                 </>
            
//             ) : ( <button onClick={()=>navigate("/login")} 
//             className="common-btn">Get Started</button>

//             )}
              
//             <br></br>

//             {
//                 user && user.role === "admin" && (
//                 <button onClick={()=>deleteHandler(course._id)} className="common-btn" 
//                 style={{background:"red" }}>Delete</button>
//             )}
       
//     </div>
//   );
// };

// export default CourseCard


import React from "react";
import "./courseCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="course-card" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <img src={`${server}/${course.image}`} alt="" className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor- {course.createdBy}</p>
      <p>Duration- {course.duration} weeks</p>
      <p>Price- ₹{course.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}

      <br />

      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(course._id)}
          className="common-btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default CourseCard;
