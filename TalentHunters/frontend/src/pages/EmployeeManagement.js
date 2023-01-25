import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Table from '../components/Table';
import {userService} from '../helper/Fetch';
import {Hooks} from '../helper/Hooks';
import '../App.css';

//response.text() if we will use Actionresult

// TODO implement fetch js file 
const EmployeeManagement = () => {
    const [data, setData] = useState([{}]);
    const {formValues: inputData, handleChange} = Hooks.useHandleChange();
    const table = useMemo( () => <Table data={data}/>, [data])
   
    console.log(inputData)

    const getUsers = async () =>{
       await userService.getusers(setData);
    }

    const getUserById = async () =>{
        await userService.getuser(setData)
    }
  
    useEffect(() => {
        getUsers();
        
    }, [])



    return (
        <>
            <div className="container">
                <div className="column-left">  < Link to='/employee-management' className="nav-link" > <Button text="Employee Management" /></Link ></div>
                <div className="column-right"><Link to='/division-management' className="nav-link">  <Button text="Division Management" /></Link></div>
            </div>

            <div className="queries">
                <div>
                    <label>Get All User</label><br />
                    <Button onClick={getUsers} text="Get" /><br />
                </div>


                <div>
                    <br />
                    <label>Get single user by id</label> <br />
                    <input placeholder="User Id" id="userid" name='userid' value={inputData.userId} onChange={handleChange} />
                    <Button onClick={() => getUserById(inputData.userid)} text="Search" />
                </div>
                <div>

                    {/*<label>Add New User</label><br />*/}
                    {/*<input placeholder="Email"*/}
                    {/*    id="userEmail" ref={emailRef} />-*/}
                    {/*<input placeholder="Password"*/}
                    {/*    id="userPassword" type="password" ref={passwordRef} />*/}
                    <Link to='/addemployee' className="nav-link"> <Button text="Add Employee" /></Link>

                </div>


            </div>
            
            <div>
                {table}
            </div>

                           
        </>

    )
}



export default EmployeeManagement;