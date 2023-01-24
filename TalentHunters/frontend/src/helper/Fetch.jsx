

const login = async (email, password) => {
    const employee = {
        'Email': email, 'Password': password
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
                authUser.authdata = window.btoa(email + ':' + password);
                localStorage.setItem('authUser', JSON.stringify(authUser));
            }
            else{
                alert("You have entered an invalid username or password")
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



export const userService = {
    login,
    logout,

}


