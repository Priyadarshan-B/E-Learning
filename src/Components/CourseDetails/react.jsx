import React from "react";
import './courseDetails.css';
import { useNavigate } from "react-router-dom";
import react from '../../Assests/react.jpg';


const ReactDetails=()=> {
    const navigate = useNavigate();

    const topics = [
        "Introduction to React",
        "JSX and Components",
        "State and Props",
        "Handling Events",
        "Conditional Rendering",
        "Lists and Keys",
        "Forms and Input",
        "Lifecycle Methods",
        "Hooks",
        "Routing",
        "State Management",
        "Testing",
        "Deployment",
    ];

    const handleBookSession = () => {
        navigate('/slot');
        
    };

    return (
        <div className="details">
            <div className="course-details" >
                <h1 style={{ position: "sticky", top: "0", backgroundColor: "#f9f9f9", padding: "10px" }} data-aos = "fade-up">
                    React Course Topics
                </h1>
                <ul>
                    {topics.map((topic, index) => (
                        <li key={index} className="topic-item" >
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="author-details">
                <div className="author-card">
                    <img src={react} alt="Author" className="author-image" data-aos = "fade-right"/>
                    <h2 data-aos = "fade-left">React JS</h2>
                    <p className="author-description" data-aos = "fade-right">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, veniam.
                    </p>
                    <p className="author-language">English Language</p>
                    <button className="book-trial" onClick={handleBookSession} data-aos = "fade-up">Book Session</button>
                </div>
            </div>
          
        </div>
        
       
    );
}

export default ReactDetails;
