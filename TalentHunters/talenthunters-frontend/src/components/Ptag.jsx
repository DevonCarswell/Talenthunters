import React from 'react';

function ReactComponent( {data}) {
  return (
 
<table className='table table-striped' aria-labelledby="tabelLabel">
    <thead>
    <tr>
        <th>User Id</th>
        <th>Registration Date</th>
        <th>Email</th>
        <th>Hashed Password</th>
    </tr>
    </thead>
    <tbody>
    {data.map( (forecast, index) =>
                        <tr key={forecast.Id}>
                            <td>{forecast.RegistrationDate}</td>
                            <td>{forecast.Email}</td>
                            <td>{forecast.HashedPassword}</td>
                        </tr>
                    )}
    </tbody>
</table>


  );
}

export default ReactComponent;