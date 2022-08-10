import React, { useState } from 'react';
import Button from '../components/Button';



const management = () => {
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const handleClick = async () => {
        const users = await fetchData();
        console.log(users);
        setData(users);
        setLoading(false);
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
            {loading ? '' :
                data.map((user) => <p key={user.id}>Id: {user.id}, Email: {user.email}, Registration date: {user.registrationDate},
                    PWhash: {user.hashedPassword}
        </p>)}
        </div>
    </>

)
}


export default management;