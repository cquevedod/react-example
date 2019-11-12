import React, { Component } from 'react';
import axios from 'axios';
import UsersGrid from '../Organisms/UsersGrid';

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        axios.get(URL)
        .then(resp => {
            this.setState({
                users: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            alert(err);
          });
    }

    render() {
        const {users} = this.state
        return (
            <UsersGrid users={users}/>
        )
    }
}

export default Users;