import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Users = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const result = await axios("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data)
        }
        getUsers()
    })

    return (
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Users;