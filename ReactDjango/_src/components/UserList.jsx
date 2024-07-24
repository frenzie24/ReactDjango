import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then(response => {

                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className='w-fit flex flex-row flex-wrap justify-center bg-sky-950 text-zinc-200 p-2 rounded-md'>
            <h1 className='w-full text-3xl font-bold '>Users</h1>
            <ul >
                {users.map(user => (
                    <li className="w-full" key={user.id}>Name: {user.first_name}{user.last_name}<br></br>Email: {user.email} </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;