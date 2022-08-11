import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';



const management = () => {
    const apis = ['get-users', `get-user/`, 'add-user', `update-user-email/`, `delete-user/`]
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const inputRef = useRef(null);


    const handleClick = async () => {
        fetch(`https://localhost:7155/manager/get-users`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    };


    async function getuser() {
        const id = inputRef.current.value
        fetch(`https://localhost:7155/manager/get-user/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
        console.log(data)
        setLoading(false);
    }

    return (
        <>

            <Button onClick={handleClick} text="Get All Users" />

            <div>
                <br />
                <label>Get single user by id</label> <br />
                <input placeholder="userId" id="userid" ref={inputRef} />
                <Button onClick={getuser} text="Get User by id" />
            </div>
            <div>
                {loading ? '' :
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>RegistrationDate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.length >= 1 ? data.map((user, index) => (
                                <tr key={index}>
                                    <td> {user.id} </td>
                                    <td> {user.email} </td>
                                    <td> {user.registrationDate} </td>
                                </tr>
                            )) : <tr key ="0">
                                    <td> {data.id} </td>
                                    <td> {data.email} </td>
                                    <td> {data.registrationDate} </td>
                            </tr>}
                        </tbody>
                    </table>}
            </div>



        </>

    )
}



export default management;