import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';
import AuthHeader from '../helper/AuthHeader';

const DivisionEmployee = () => {
    const [data, setData] = useState([{}]);
    const [name, setName] = useState("");
    const location = useLocation();
    const header = AuthHeader();
  
    useEffect(() => {
        getEmployeesByDivision(location.state.id)
        setName(location.state.name)
    }, [name])
   

   
    async function getEmployeesByDivision(id) {
        await fetch(`/division/get-employees-by-division/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json;charset=UTF-8",
                        "Authorization": header
                    }

                })
            .then(response => response.json())
            .then(json => setData(json))
    
        };

     

    return (
        <>
    <div class="container">
        <div class="column-left">  < Link to='/employee-management' className="nav-link" > <Button text="Employee Management" /></Link ></div>
        <div class="column-right"><Link to='/division-management' className="nav-link">  <Button text="Division Management" /></Link></div>
        </div>

            <h3>Employees of {name} division</h3>
                <div>
                    {data.length >= 1  ?
                        <table className="table" style={{ textAlign: 'center' }}>
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
                                {data.map((user, index) => (
                                    <tr key={index}>
                                        <td value={user.id}> {user.id} </td>
    
                                        <td> {user.firstName} </td>
                                        <td> {user.lastName} </td>
                                        <td> {user.email} </td>
                                        {/* TODO employeeRole separation*/}
                                        <td> {user.employeeRole} </td>
                                        <td> {new Date(user.registrationDate).toLocaleDateString('en-gb')} </td>
    
                                    </tr>
                                ))}
                            </tbody>
                        </table> :
                        <table className="table" style={{ textAlign: 'center' }}>
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
    
                                <tr>
                                    <td value={data.id}> {data.id} </td>
                                    <td>  {data.firstName} </td>
                                <td>  {data.lastName} </td>
                            <td> {data.email} </td>
                                <td> {data.employeeRole} </td>
    {data.length !== 0 ? 
                                    <td> {new Date(data.registrationDate).toLocaleString()} </td>
    : <td> </td>}
                                                </tr>
    
                            </tbody>
            </table>}
                </div >
    
    
    
            </>
    )
    
}



export default DivisionEmployee;