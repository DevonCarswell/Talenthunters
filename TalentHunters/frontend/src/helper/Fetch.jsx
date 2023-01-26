import AuthHeader from "./AuthHeader";

// const header = AuthHeader();

const login = async (email, password) => {
  const employee = {
    Email: email,
    Password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  };
  await fetch("/employee/login", requestOptions)
    .then(handleResponse)
    .then((authUser) => {
      // login successful if there's a user in the response
      if (authUser) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        authUser.authdata = window.btoa(email + ":" + password);
        localStorage.setItem("authUser", JSON.stringify(authUser));
      } else {
        alert("You have entered an invalid username or password");
      }
      window.location.reload();
      return JSON.parse(localStorage.getItem("authUser"));
    });
};

const handleResponse = (response) => {
  return response.text().then((text) => {
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
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.clear();
};

const getUsers = async (setData) => {
  fetch(`/employee/get-employees`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: AuthHeader(),
    },
  })
    .then((response) => response.json())
    .then((json) => setData(json));
};

const getUser = async (userId, setData) => {
  fetch(`/employee/get-employee/${userId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: AuthHeader(),
    },
  })
    .then((response) => response.json())
    .then((json) => setData(json));
};

async function deleteUser(id) {
  await fetch(`/employee/delete-employee/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: AuthHeader(),
    },
  });
}

async function updateEmail(id, email) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: AuthHeader(),
    },
    body: JSON.stringify(email),
  };
  await fetch(`/employee/update-employee-email/${id}`, requestOptions);
}

async function getEmployeeRoles(setData) {
  fetch(`/employee/get-roles`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: AuthHeader(),
    },
  })
    .then((response) => response.json())
    .then((json) => setData(json));
}

async function addUser(newUser) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AuthHeader(),
    },
    body: JSON.stringify(newUser),
  };
  await fetch("/employee/add-employee", requestOptions);
}
export const userService = {
  login,
  logout,
  getUsers,
  getUser,
  deleteUser,
  updateEmail,
  getEmployeeRoles,
  addUser,
};
