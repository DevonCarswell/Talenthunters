import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';




const Registration = () =>  {
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "None",
        confirmedpassword: ""
    })
    const [authUser, SetAuthUser] = useState({})

    const navigate = useNavigate();

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setUser((user) => {
            return {
                ...user,
                [name]: value
            }
        })
    };
    
    async function adduser() {
        if (user.email != '' && user.firstname != '' && user.lastname != '' && user.password != '') {
            const newUser = {
                'Email': user.email,
                'HashedPassword': user.password,
                'FirstName': user.firstname,
                'LastName': user.lastname,
                'EmployeeRole': user.role
            };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            };
            await fetch('/employee/add-employee', requestOptions)
                .then((response) => {
                  if (response.status === 400) {
                      alert('Email address is taken')
                    }
                    if (response.status === 200) {
                        authUser.authdata = window.btoa(user.email + ':' + user.password);
                        authUser.firstName = user.firstname;
                        authUser.lastName = user.lastname;
                        authUser.email = user.email;
                        authUser.role = user.role;
                            localStorage.setItem('authUser', JSON.stringify(authUser));
                      navigate('/')
                  }
                }
        );
        }
    }

  


    return (
        <>
    

            <div>
                
                    <h2>Registration</h2>
                    <label>First Name</label>  <br />
                    <input placeholder="Firstname"
                        id="firstname" name="firstname" type="text" value={user.firstname} onChange={handleChange} required /> <br /><br />
                    <label>Last Name</label>  <br />
                    <input placeholder="Lastname"
                        id="lastname" name="lastname" type="text" value={user.lastname} onChange={handleChange} required /> <br /><br />
                    <label>Email</label>  <br />
                    <input placeholder="Email"
                        id="userEmail" name="email" value={user.email} onChange={handleChange} required /> <br /><br />
                    {/*{emails.includes(user.email) ? <p style={{color:"red"}}>This email is already in use!</p> : ""}*/}
                    <label>Password</label> <br />
                    <input placeholder="Password"
                        id="userPassword" name="password" type="password" value={user.password} onChange={handleChange} required />  <br /><br />
                    <label>Confirm Password</label> <br />
                    <input placeholder="Confirm Password"
                        id="confirmeduserPassword" name="confirmedpassword" type="password" value={user.confirmedpassword} onChange={handleChange} required />  <br /><br />
                    {user.password != user.confirmedpassword ? <p style={{color:"red"}}>Passwords do not match!</p> : ""}
                    
                    <Button disabled={user.password != user.confirmedpassword || user.password == "" } onClick={() => adduser()} text="Register" /> < br /> < br />

               

            </div>
        </>
    );
}

export default Registration;