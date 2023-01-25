import React, { useState } from "react";

const Table = ({ data }) => {
  const [header, setHeader] = useState([]);
  return (
    <>
      <table className="table" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registration Date</th>
          </tr>
        </thead>

        <tbody>
          <tr key={index}>
            <td value={user.id}> {user.id} </td>

            <td> {user.firstName} </td>
            <td> {user.lastName} </td>
            <td> {user.email} </td>
            {/* TODO employeeRole separation*/}
            <td> {user.employeeRole} </td>
            <td>
              {new Date(user.registrationDate).toLocaleDateString("en-gb")}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
