import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'


const home = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        const employee = {
            'Email': user.email, 'Password': user.password
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        };
        await fetch('/employee/login', requestOptions)
            .then(handleResponse)
            .then(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(user.email + ':' + user.password);
                    localStorage.setItem('user', JSON.stringify(user));
                }

                return user;



            })}


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

        function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
        }

        function handleResponse(response) {
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    if (response.status === 401) {
                        // auto logout if 401 response returned from api
                        logout();
                        // location.reload(true);
                    }

                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                return data;
            });
        }

        return (
            <div className="text-center">
                <h1>Login</h1>
                <form>
                    <label>Email</label><br />
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" value={user.email} onChange={handleChange}
                        required /><br /><br />
                    <label>Password</label><br />
                    <input type="password" id="password" name="password" placeholder="password" value={user.password} onChange={handleChange}
                        required /><br /><br />
                    <Button text="login" onClick={login} />
                </form>
                <br />
                <Link to="/">Forgot your password?</Link><br />
                <Link to="/registration">Click here, to register.</Link>
            </div>
        );
    }


    export default home;