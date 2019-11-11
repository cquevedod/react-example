import React, { Component } from 'react';
import UserCard from '../Molecules/UserCard';


class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        fetch(URL, {method: 'get'})
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }

    render() {
        const {users} = this.state
        return (
            <div className="ed-grid">
                <h1>Users</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                {
                    users.map(user => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                    />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Users;