import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { userService } from "../helper/Fetch";
import { Hooks } from "../helper/Hooks";

const AddEmployee = () => {
  const { formValues: employeeData, handleChange } = Hooks.useHandleChange();
  const [roles, setRoles] = useState(["None"]);
  useEffect(() => {
    const getRoles = async () => {
      await userService.getEmployeeRoles(setRoles);
    };
    getRoles();
  }, []);

  const addUser = () => {
    const newUser = {
      Email: employeeData.email,
      HashedPassword: employeeData.password,
      FirstName: employeeData.firstName,
      LastName: employeeData.lastName,
      EmployeeRole: employeeData.role,
    };
    userService.addUser(newUser);
  };

  return (
    <>
      <div className="container">
        <div className="column-left">
          {" "}
          <Link to="/employee-management" className="nav-link">
            {" "}
            <Button text="Employee Management" />
          </Link>
        </div>
        <div className="column-right">
          <Link to="/division-management" className="nav-link">
            {" "}
            <Button text="Division Management" />
          </Link>
        </div>
      </div>

      <div>
        <form>
          <h2>Employee Data</h2>
          <label>Email</label> <br />
          <input
            placeholder="Email"
            id="userEmail"
            name="email"
            value={employeeData.email || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <label>Password</label> <br />
          <input
            placeholder="Password"
            id="userPassword"
            name="password"
            type="password"
            value={employeeData.password || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <label>First Name</label> <br />
          <input
            placeholder="First Name"
            id="firstName"
            name="firstName"
            type="text"
            value={employeeData.firstName || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <label>Last Name</label> <br />
          <input
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            value={employeeData.lastName || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <div>
            <label>Role</label> <br />
            <select
              name="role"
              value={employeeData.role}
              onChange={handleChange}
            >
              {roles.map((r, index) => (
                <option key={index} value={r.value}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <Button onClick={() => addUser()} text="Add User" /> <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
