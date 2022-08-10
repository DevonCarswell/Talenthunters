import React, { useState } from 'react';
import Button from '../components/Button';
import Ptag from '../components/Ptag';


const management = () => {
    const [data, setData] = useState([{}, { 'loading': true }]);
    const handleClick = async () => {
        const users = await fetchData();
        console.log(users);
        setData(users, { 'loading': false })
    };



const fetchData = async () => {
    const response = await fetch('https://localhost:7155/manager/get-users');
    const data = await response.json();
    return data;
}

return (
    <>
        <p>Szevasztok</p>
        <Button onClick={handleClick} />
        <div>
            {data.loading ? '' : <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Registration Date</th>
                        <th>Email</th>
                        <th>Hashed Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((forecast, index) =>
                        <tr key={forecast.Id}>
                            <td>{forecast.RegistrationDate}</td>
                            <td>{forecast.Email}</td>
                            <td>{forecast.HashedPassword}</td>
                        </tr>
                    )}
                </tbody>
            </table>}
        </div>
    </>

)
}


export default management;