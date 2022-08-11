import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import '../App.css';



const management = () => {
    const apis = ['get-users', `get-user/`, 'add-user', `update-user-email/`, `delete-user/`]
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState('');
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const newemailRef = useRef(null);






    const getusers = async () => {
        fetch(`https://localhost:7155/manager/get-users`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    };


    async function getuser(id) {
        // const id = inputRef.current.value;
        fetch(`https://localhost:7155/manager/get-user/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
        inputRef.current.value = '';
        setLoading(false);

    }

    function deleteuser(id) {
        fetch(`https://localhost:7155/manager/delete-user/${id}`,
            { method: 'DELETE' }
        );
        console.log('Successfully deleted the user.');
        getusers();
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
        emailRef.current.value = '';
        passwordRef.current.value = '';
        getusers();
    }


    async function updateemail(id) {
        const newEmail = newemailRef.current.value;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmail)
        };
        const response = await fetch(`https://localhost:7155/manager/update-user-email/${id}`, requestOptions);
        getuser(id);
        newemailRef.current.value = '';
    }

    useEffect(() => {
        getusers();
    }, [])


    return (
        <>
            <div className="queries">
                <div>
                    <label>Get All User</label><br />
                    <Button onClick={getusers} text="Get" /><br />
                </div>


                <div>
                    <br />
                    <label>Get single user by id</label> <br />
                    <input placeholder="User Id" id="userid" ref={inputRef} />
                    <Button onClick={() => getuser(inputRef.current.value)} text="Search" />
                </div>
                <div>

                    <label>Add New User</label><br />
                    <input placeholder="Email"
                        id="userEmail" ref={emailRef} />-
                    <input placeholder="Password"
                        id="userPassword" type="password" ref={passwordRef} />
                    <Button onClick={adduser} text="Add" />
                </div>


            </div>
            <div>
                {data.length >= 1 || loading ?
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>RegistrationDate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index}>
                                    <td value={user.id}> {user.id} </td>
                                    <td> {user.email} </td>
                                    <td> {new Date(user.registrationDate).toLocaleDateString('en-gb')} </td>

                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>RegistrationDate</th>
                                <th> Update Email</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td value={data.id}> {data.id} </td>
                                <td> {data.email} </td>
                                <td> {new Date(data.registrationDate).toLocaleString()} </td>
                                <td><input placeholder="new email" ref={newemailRef}></input><Button text="go" onClick={() => updateemail(data.id)} /></td>
                                <td value={data.id}>{data.length == 0 ? '' : <Button text='X' onClick={() => deleteuser(data.id)} />}</td>
                            </tr>

                        </tbody>
                    </table>}
            </div>



        </>

    )
}



export default management;