import React from 'react';
import courses from '../../data/data'
import { Link } from 'react-router-dom';

const Course = ({ match }) => {

    const currentCourse = 
    courses
        .filter(course =>
        course.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            !currentCourse ? (<h1>Course does not exist</h1>)
            :
            <>
                <h1 className="m-cols-3">Course: {currentCourse.title}</h1>
                <img className="m-cols-1" src={currentCourse.image} alt={currentCourse.title}/>
                <p className="m-cols-2">Professor: {currentCourse.professor}</p>
                <Link to={`/courses`}>
                <button className="m-cols-2">Go back</button>
                </Link>
            </>
        }
        </div>
    )
}
   
export default Course;