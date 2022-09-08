import React from 'react'

function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return  `'Authorization': 'Basic ' + ${user.authdata}`;
    } else {
        return {};
    }
}

export default authHeader;