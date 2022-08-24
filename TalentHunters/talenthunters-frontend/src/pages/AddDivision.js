import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';



function ReactComponent() {
    const [user, setUser] = useState({
        name: "",
        manager: {
            //...
        }
        employees: [{
            //..
        }]

        /*role: 0*/
    })

    const handleChange = (e) =>
    {
        let value = e.target.value
        let name = e.target.name

        setUser((user) => {
            return {
                ...user,
                [name]: value
            }
        })
    }
  
    async function adduser() {
        const newUser = {
            'Email': user.email, 'HashedPassword': user.password,
            'FirstName': user.firstname, 'LastName': user.lastname, /*'EmployeeRole': user.role*/};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        await fetch('/employee/add-employee', requestOptions);
        
        
    }

    

    return (
        <>
            <h2>Employee Data</h2>
            <label>Email*</label> {" "}
            <input placeholder="Email"
                id="userEmail" name="email" value={user.email} onChange= {handleChange} required />  {" "}
            <label>Password*</label>{"\n"}
            <input placeholder="Password"
                id="userPassword" name="password" type="password" value={user.password} onChange={handleChange} required /> <br/>
            <label>First Name*</label>  <br/>
            <input placeholder="Firstname"
                id="firstname" name="firstname" type="text" value={user.firstname} onChange={handleChange} required /> <br/>
            <label>Last Name*</label> <br/>
            <input placeholder="Lastname"
                id="lastname" name="lastname" type="text" value={user.lastname} onChange={handleChange} required /> <br/>
               

            <Button onClick={() => adduser()} text="Add User" />

                    <h4>* are required</h4>
        </>
    );
}

export default ReactComponent;