import React, {  } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import useHandleChange from '../helper/Hooks';
import {userService} from '../helper/Fetch'

const Home = () => {
   const {formValues, handleChange} = useHandleChange();
    
    
    const login = async () =>{
        const email = formValues.email;
        const password = formValues.password;
        userService.login(email, password);
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