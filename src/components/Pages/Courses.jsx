import React, { Component } from 'react';
import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid';


class Courses extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        const URI = 'https://my-json-server.typicode.com/cquevedod/json-db/courses';
        axios.get(URI)
        .then(resp => {
            this.setState({
                courses: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            alert(err);
          });
    }

    render() {
        const { courses } = this.state
        return <CourseGrid courses={courses}/>
    }
}

export default Courses