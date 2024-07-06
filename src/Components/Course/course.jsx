import React from 'react';
import './course.css'
import course from '../../Assests/course1.jpeg'

const courseData = [
    { id: 1, name: 'Course 1', image: course },
    { id: 2, name: 'Course 2', image: course },
    { id: 3, name: 'Course 3', image: course },
    { id: 4, name: 'Course 4', image: course },
    { id: 5, name: 'Course 5', image: course },
    { id: 6, name: 'Course 6', image: course },
  ];
const Course = React.forwardRef((props, ref) => (
    <section ref={ref} id="courses" data-aos="fade-up">
    <h1>Our Courses</h1>
    <div className='total-course'>
        <div className="courses-container">
          {courseData.map((course) => (
            <div key={course.id} className="course-box">
              <img src={course.image} alt={course.name} className="course-image" />
              <div className="course-name">{course.name}</div>
            </div>
          ))}
        </div>
        <div>
            <button className='view-more'>
            View More..
            </button>
        </div>
    </div>
  </section>
));

export default Course
