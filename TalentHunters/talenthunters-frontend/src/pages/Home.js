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
            'Email': user.email, 'Password': user.password,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        };
        await fetch('/employee/login', requestOptions);



    }


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