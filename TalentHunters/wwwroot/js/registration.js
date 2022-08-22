let url = "https://localhost:44340/api/registration";


function init() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirmpassword");
    
    const button = document.querySelector("#register");
    button.addEventListener("click",async () => {
        let payload = {
            "EmailToReg": email.value,
            "PasswordToReg": password.value,
            "ConfirmPasswordToReg": confirmpassword.value
        }
        await apiPost(url, payload);
        
        window.location.href = "/";
        alert("your registration was succesful");
    });
};






async function apiPost(url, payload) {
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    return response;
}

init();