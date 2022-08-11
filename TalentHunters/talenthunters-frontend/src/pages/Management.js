import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';



const management = () => {
    const apis = ['get-users', `get-user/`, 'add-user', `update-user-email/`, `delete-user/`]
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState('-1');
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const newemailRef = useRef(null);



    const handleClick = async () => {
        fetch(`https://localhost:7155/manager/get-users`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    };


    async function getuser() {
        const id = inputRef.current.value;
        fetch(`https://localhost:7155/manager/get-user/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    }

    function deleteuser(id) {
        fetch(`https://localhost:7155/manager/delete-user/${id}`,
            { method: 'DELETE' }
        );
        console.log('Successfully deleted the user.');
        setLoading(true);
    }


    async function adduser() {
        const newUser = { 'EmailToReg': emailRef.current.value, 'PasswordToReg': passwordRef.current.value };
        console.log(newUser);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        const response = await fetch('https://localhost:7155/manager/add-user', requestOptions);
        /*.then(data => this.setState({ postId: data.id }))*/
        setLoading(true);

    }


    async function updateemail(id) {
        const newEmail = newemailRef.current.value;
        console.log(newEmail);
        console.log(id);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmail)
        };
        const response = await fetch(`https://localhost:7155/manager/update-user-email/${id}`, requestOptions);
        getuser();
    }


    return (
        <>
            <div>
                <Button onClick={handleClick} text="Get All Users" /><br />
            </div>
            <br />
            <div>

                <label>Add New User</label><br />
                <input placeholder="Email"
                    id="userEmail" ref={emailRef} />
                <input placeholder="Placeholder"
                    id="userPassword" ref={passwordRef} />
                <Button onClick={adduser} text="Add New User" />
            </div>

            <div>
                <br />
                <label>Get single user by id</label> <br />
                <input placeholder="User Id" id="userid" ref={inputRef} />
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
                                <th>Delete User</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.length >= 1 ? data.map((user, index) => (
                                <tr key={index}>
                                    <td value={user.id}> {user.id} </td>
                                    <td> {user.email} </td>
                                    <td> {user.registrationDate} </td>
                                    <td value={user.id}>{data.length == 0 ? '' : <Button text='X' onClick={() => deleteuser(user.id)} />}</td>
                                </tr>
                            )) : <tr key="0">
                                <td> {data.id} </td>
                                <td> {data.email} </td>
                                <td> {data.registrationDate} </td>
                                <td><input placeholder="new email" ref={newemailRef}></input><Button text="go" onClick={() => updateemail(data.id)} /></td>
                                <td value={data.id}>{data.length == 0 ? '' : <Button text='X' />}</td>
                            </tr>}
                        </tbody>
                    </table>}
            </div>



        </>

    )
}



export default management;