import React from 'react';

function ReactComponent( {weather}) {
  return (
 
<table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                                <th>Date</th>
                                <th>Temp. (C)</th>
                                <th>Temp. (F)</th>
                                <th>Summary</th>
                            </tr>
                    </thead>
                    <tbody>
              {weather.map( (forecast) =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                    </tbody>
                </table>


  );
}

export default ReactComponent;