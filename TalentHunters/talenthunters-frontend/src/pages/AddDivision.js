import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';



function AddDivision() {
    const [division, setDivision] = useState({
        name: "",
        manager: {
            //...
        },
        employees: [{
            //..
        }]

        /*role: 0*/
    })

    const [employees, setEmployees] = useState(["None"])

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setDivision((division) => {
            return {
                ...division,
                [name]: value
            }
        })
    }

    async function getEmployees() {
        fetch(`/employee/get-roles`)
            .then(response => response.json())
            .then(json => setEmployees(json))
    }


    async function adddivision() {
        const newDivision = {
            'Name': division.name,
            'Manager': division.manager,
            'Employees': division.employees
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDivision)
        };
        await fetch('/division/add-division', requestOptions);


    }

    useEffect(() => {
        getEmployees();
    }, [])

    return (
        <>

    <div class="container">
        <div class="column-left">  < Link to='/employee-management' className="nav-link" > <Button text="Employee Management" /></Link ></div>
        <div class="column-right"><Link to='/division-management' className="nav-link">  <Button text="Division Management" /></Link></div>
        </div>
            <h2>Division Data</h2>
            <label>Name</label> {" "}<br /><br />
            <input placeholder="Name"
                id="Name" name="name" value={division.name} onChange={handleChange} required />  {" "}<br /><br />
            <div>
                <label>Manager</label>{"\n"}<br />
                <select name="employee" value={division.manager.name} onChange={handleChange}>
                    {employees.map((r, index) => (
                        <option key={index} value={r.value}>{r}</option>
                    ))}
                </select>
            </div><br />



            <Button onClick={() => adddivision()} text="Add Division" />
        </>
    );
}

export default AddDivision;