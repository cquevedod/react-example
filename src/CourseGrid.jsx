import React from 'react';
import Course from './Course';
import courses from './resources/data'


const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(course => 
            <Course
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            price={course.price}
            professor={course.professor}
            />
        ) }
    </div>
)

export default CourseGrid