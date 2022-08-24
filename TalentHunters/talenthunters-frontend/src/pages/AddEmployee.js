import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';




function ReactComponent() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: ""
    })
  
    const [roles, setRoles] = useState(["None"])

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setUser((user) => {
            return {
                ...user,
                [name]: value
            }
        })
    }
    async function getEmployeeRoles() {
        fetch(`/employee/get-roles`)
            .then(response => response.json())
            .then(json => setRoles(json))
    }

    async function adduser() {
        const newUser = {
            'Email': user.email, 'HashedPassword': user.password,
            'FirstName': user.firstname, 'LastName': user.lastname, 'EmployeeRole': user.role
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        await fetch('/employee/add-employee', requestOptions);


    }


    useEffect(() => {
        getEmployeeRoles();
    }, [])

    return (
        <>
            <div>
                <form>
                    <h2>Employee Data</h2>
                    <label>Email</label>  <br />
                    <input placeholder="Email"
                        id="userEmail" name="email" value={user.email} onChange={handleChange} required /> <br /><br />
                    <label>Password</label> <br />
                    <input placeholder="Password"
                        id="userPassword" name="password" type="password" value={user.password} onChange={handleChange} required />  <br /><br />
                    <label>First Name</label>  <br />
                    <input placeholder="Firstname"
                        id="firstname" name="firstname" type="text" value={user.firstname} onChange={handleChange} required /> <br /><br />
                    <label>Last Name</label>  <br />
                    <input placeholder="Lastname"
                        id="lastname" name="lastname" type="text" value={user.lastname} onChange={handleChange} required /> <br /><br />
                    <div>
                        <label>
                            Role</label>
                        <select name="role" value={user.role} onChange={handleChange}>
                            {roles.map((r, index) => (
                                <option key={index} value={r.value}>{r}</option>
                            ))}
                        </select>
                    </div>
                    <Button onClick={() => adduser()} text="Add User" /> <br /><br />

                </form>

            </div>
        </>
    );
}

export default ReactComponent;