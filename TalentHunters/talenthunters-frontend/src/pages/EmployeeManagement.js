import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

//response.text() if we will use Actionresult


const employeeManagement = () => {
    // const [category, setCategory] = useState("employee")
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState("");
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const newemailRef = useRef(null);


    const getusers = async () => {
        fetch(`/employee/get-employees`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    };


     async function getuser(userId) {
        // const id = inputRef.current.value;
         fetch(`/employee/get-employee/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
        setUserId("")
        setLoading(false);

    }


    async function deleteuser(id) {
        await fetch(`/employee/delete-employee/${id}`,
            { method: 'DELETE' }
        );
        getusers();

    }

    const getEmployeesByDivision = (id) =>{
        fetch(`/division/get-employees-by-division/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
    }
    


    async function updateemail(id) {
        const newEmail = newemailRef.current.value;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmail)
        };
        await fetch(`/employee/update-employee-email/${id}`, requestOptions);
        getuser(id);
        newemailRef.current.value = '';
    }

   

    useEffect(() => {
        getusers();
    }, [])

      
        

    return (
        <>
    <div class="container">
                <div class="column-left">  < Link to='/employee-management' className="nav-link" > <Button text= "Employee Management" /></Link ></div>
                <div class="column-right"><Link to='/division-management' className="nav-link">  <Button text="Division Management" /></Link></div>
        </div>

            <div className="queries">
                <div>
                    <label>Get All User</label><br />
                    <Button onClick={getusers} text="Get" /><br />
                </div>


                <div>
                    <br />
                    <label>Get single user by id</label> <br />
                    <input placeholder="User Id" id="userid" value={userId} onChange={(e)=> setUserId(e.target.value)} />
                    <Button onClick={() => getuser(userId)} text="Search" />
                </div>
                <div>

                    {/*<label>Add New User</label><br />*/}
                    {/*<input placeholder="Email"*/}
                    {/*    id="userEmail" ref={emailRef} />-*/}
                    {/*<input placeholder="Password"*/}
                    {/*    id="userPassword" type="password" ref={passwordRef} />*/}
                    <Link to='/addemployee' className="nav-link"> <Button text="Add Employee" /></Link>
                    
                </div>


            </div>
            <div>
                {data.length >= 1 || loading ?
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index}>
                                    <td value={user.id}> {user.id} </td>

                                    <td> {user.firstName} </td>
                                    <td> {user.lastName} </td>
                                    <td> {user.email} </td>
                                    {/* TODO employeeRole separation*/}
                                    <td> {user.employeeRole} </td>
                                    <td> {new Date(user.registrationDate).toLocaleDateString('en-gb')} </td>

                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Registration Date</th>
                                <th>Update Email</th>
                                <th>Delete Employee</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td value={data.id}> {data.id} </td>
                                <td>  {data.firstName} </td>
                            <td>  {data.lastName} </td>
                        <td> {data.email} </td>
                        <td> {data.employeeRole} </td>
                        <td> {new Date(data.registrationDate).toLocaleString()} </td>
                        <td><input placeholder="new email" ref={newemailRef}></input><Button text="go" onClick={() => updateemail(data.id)} /></td>
                        <td value={data.id}>{data.length === 0 ? '' : <Button text='X' onClick={() => deleteuser(data.id)} />}</td>
                    </tr>

                        </tbody>
        </table>}
            </div >



        </>

    )
}



export default employeeManagement;