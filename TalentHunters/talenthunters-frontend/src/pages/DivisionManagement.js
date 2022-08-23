import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';


const DivisionManagement = () => {

    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [divisionId, setDivisionId] = useState("");
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const newemailRef = useRef(null);


    const getdivisions = async () => {
        await fetch(`/division/get-divisions`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(false);
    };
    console.log(data);

    async function getdivision(divisionId) {
        // const id = inputRef.current.value;
        await fetch(`/division/get-division/${divisionId}`)
            .then(response => response.json())
            .then(json => setData(json))
        setDivisionId("")
        setLoading(false);

    }


    async function deletedivision(id) {
        await fetch(`/division/delete-division/${id}`,
            { method: 'DELETE' }
        );
        getdivisions();

    }


    useEffect(() => {
        getdivisions();
    }, [])



    return (
        <>
            <div className="queries">
                <div>
                    <label>Get All Divisions</label><br />
                    <Button onClick={getdivisions} text="Get" /><br />
                </div>


                <div>
                    <br />
                    <label>Get single division by id</label> <br />
                    <input placeholder="Division Id" id="divisionid" value={divisionId} onChange={(e) => setDivisionId(e.target.value)} />
                    <Button onClick={() => getdivision(divisionId)} text="Search" />
                </div>
                <div>

                    {/*<label>Add New User</label><br />*/}
                    {/*<input placeholder="Email"*/}
                    {/*    id="userEmail" ref={emailRef} />-*/}
                    {/*<input placeholder="Password"*/}
                    {/*    id="userPassword" type="password" ref={passwordRef} />*/}
                    <Link to='/adddivision' className="nav-link"> <Button text="Add Division" /></Link>

                </div>


            </div>
            <div>
                {data.length >= 1 || loading ?
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Manager</th>
                                <th>Employees</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((division, index) => (
                                <tr key={index}>
                                    <td value={division.id}> {division.id} </td>
                                    <td> {division.name} </td>
                                    {/*<td>{division.manager}</td>*/}
                                    {/*<td> {division.Employees} </td>*/}
                                    {/* TODO employeeRole separation*/}


                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Manager</th>
                                <th>Employees</th>
                                <th>Delete Division</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td value={data.id}> {data.id} </td>
                                <td>  {data.name} </td>
                                {/*<td>  {data.Manager} </td>
                                <td> {data.Employees} </td>*/}
                                <td value={data.id}>{data.length === 0 ? '' : <Button text='X' onClick={() => deletedivision(data.id)} />}</td>
                            </tr>

                        </tbody>
                    </table>}
            </div >



        </>

    )
}



export default DivisionManagement;