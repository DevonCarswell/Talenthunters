import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

//TODO employee + divison management with dropdown button or dropdown menu
const DivisionManagement = () => {

    useEffect(() => {
        getdivisions();
    }, [])

    const [data, setData] = useState([{}]);
    const [employee, setEmployee] = useState([{}]);
    // dummy data to managers state
    const [managers, setManagers] = useState([{ firstName: "kamu firstname ", lastName: "kamu lasname" }]);
    const [loading, setLoading] = useState(false);
    const [divisionId, setDivisionId] = useState("");



    const getdivisions = async () => {
        await fetch(`/division/get-divisions`)
            .then(response => response.json())
            .then(json => setData(json))
        setLoading(true)
    };

    

    
    async function getdivision(divisionId) {
        await fetch(`/division/get-division/${divisionId}`)
            .then(response => response.json())
            .then(json => setData(json))
        setDivisionId("")


    }

    async function getEmployeesByDivision(id) {
    await fetch(`/division/get-employees-by-division/${id}`)
        .then(response => response.json())
        .then(json => setEmployee(json))

    };
   

    async function deletedivision(id) {
        await fetch(`/division/delete-division/${id}`,
            { method: 'DELETE' }
        );
        getdivisions();

    }

console.log(divisionId)
    return (
        <>
            {loading ? (
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

                        {data.length >= 1 ?
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

                                            {/* <Link to={{ pathname: `/${this.props.testvalue}`, query: { backUrl } }} />*/}

                                            <td> {division.manager.firstName}{" "} {division.manager.lastName}  </td>
                                            {/*<td>{division.manager}</td>*/}
                                            
{/* <td><Link onClick={() => getEmployeesByDivision(division.id)} to={{   pathname: `/employee-management` }}>Employees</Link> </td> */}

<td value={division.id}> <Link to={`/division-management/employees/`} state={{id: division.id, name: division.name}}>Employees</Link> </td>

{/* <td><Link to="/division-management" onClick={() => getEmployeesByDivision(division.id)}>Employees</Link> </td> */}
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
                                        <td>  {data.manager.firstName} {" "}
                                            {
                                                data.manager.lastName
                                            }
                                        </td>
                                        {/*<td> {data.Employees} </td>*/}
                                        <td value={data.id}>{data.length === 0 ? '' : <Button text='X' onClick={() => deletedivision(data.id)} />}</td>
                                    </tr>

                                </tbody>
                            </table>}
                    </div >
                </>

            ) : ("")}
        </>

    )
}



export default DivisionManagement;