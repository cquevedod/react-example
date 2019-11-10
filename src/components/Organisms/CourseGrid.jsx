import React from 'react';
import CourseCard from '../Molecules/CourseCard';
import courses from '../../data/data'


const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(course => 
            <CourseCard
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