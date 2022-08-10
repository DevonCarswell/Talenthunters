import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
    <div className="text-center">
        <h1>Login</h1>
        <form>
        <label>Email</label><br />
        <input type="email" id="email" name="email" placeholder="example@gmail.com" required /><br /><br />
        <label>Password</label><br />
        <input type="password" id="password" name="password" placeholder="password" required /><br /><br />
        <button type="submit">Submit</button>
        </form>
        <br />
        <Link to="#">Forgot your password?</Link><br />
        <Link to="#">Click here, to register.</Link>
        </div>
        );
}

export default home;