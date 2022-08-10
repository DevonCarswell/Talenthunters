import React from 'react';

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
        <a href="#">Forgot your password?</a><br />
        <a>Click here, to register.</a>
        </div>
        );
}

export default home;