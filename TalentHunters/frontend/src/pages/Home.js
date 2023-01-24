import React, {  } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import useHandleChange from '../helper/Hooks';


const Home = () => {
   const {formValues, handleChange} = useHandleChange();
    
    
    const login = async () => {
        const employee = {
            'Email': formValues.email, 'Password': formValues.password
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        };
        await fetch('/employee/login', requestOptions)
            .then(handleResponse)
            .then(authUser => {
                // login successful if there's a user in the response
                if (authUser) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    authUser.authdata = window.btoa(formValues.email + ':' + formValues.password);
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                }
                window.location.reload();
                return JSON.parse(localStorage.getItem('authUser'));
            })
        };

        
        function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 204) {
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


    
    

    function logout() {
        // remove user from local storage to log user out
        localStorage.clear();
    }

  


    return (
        <>
        {localStorage.getItem('authUser') ? <h1>Successfully logged in.</h1> :
        <div className="text-center">
            <h1>Login</h1>
            <label>Email</label><br />
            <input type="email" id="email" name="email" placeholder="example@gmail.com" value={formValues.email ||''} onChange={handleChange}
                required /><br /><br />
            <label>Password</label><br />
            <input type="password" id="password" name="password" placeholder="password" value={formValues.password || ''} onChange={handleChange}
                required /><br /><br />
            <Button text="login" onClick={() => login()} />

            <br />
            <Link to="/">Forgot your password?</Link><br />
            <Link to="/registration">Click here, to register.</Link>
        </div> }</>
    );
}


export default Home;