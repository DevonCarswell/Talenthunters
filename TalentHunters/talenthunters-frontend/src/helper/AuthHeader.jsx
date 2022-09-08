import React from 'react'

function authHeader() {
    // return authorization header with basic auth credentials
    let authUser = JSON.parse(localStorage.getItem('authUser'));

    if (authUser && authUser.authdata) {
        return  `Basic ${authUser.authdata}`;
    } else {
        return "";
    }
}

export default authHeader;