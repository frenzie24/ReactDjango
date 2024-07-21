import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {




        axios.get('http://localhost:8000/api/roles/')
            .then(response => {

                setRoles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className=' flex flex-row flex-wrap justify-center bg-sky-950 text-zinc-200 p-2 rounded-md'>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className='w-full'>Roles</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Pay Rate</th>
                    </tr>
                </thead>
                <tbody>
                {roles.map(role => (
                    <tr key={role.id}>
                        <td >{role.name}</td>
                        <td>{role.description}</td>
                        <td>{role.pay * 100000}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default RoleList;