import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Ptag from './components/Ptag';
export default App;


//async function populateWeatherData() {
//    const response = await fetch('weatherforecast');
//    const data = await response.json();
//    setWeather({ forecasts: data, loading: false });
//}

function App() {
    const data = [
        {
            "date": "2022-08-10T14:11:06.6503283+02:00",
            "temperatureC": -15,
            "temperatureF": 6,
            "summary": "ChillyWillie"
        },
        {
            "date": "2022-08-11T14:11:06.6511357+02:00",
            "temperatureC": 53,
            "temperatureF": 127,
            "summary": "ChillyWillie"
        },
    ];

    const [weather, setWeather] = useState(data);

    //const response = await fetch('http://localhost:8080/', { mode: 'cors' });

    useEffect(() => {
        const getData = async () => {
            const dat = await fetchData();
            setWeather(dat);
        }

        getData();
    }, []);


    const fetchData = async () => {
        const response = await fetch('https://localhost:7155/weatherforecast');
        const data = await response.json();
        console.log(data);
        return data;

    };

    
        return (
                <Ptag weather={weather} />
        );
}



//  import React, { Component } from 'react';

//export default class App extends Component {
//    static displayName = App.name;

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };
//    }

//    componentDidMount() {
//        this.populateWeatherData();
//    }

//    static renderForecastsTable(forecasts) {
//        return (
//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        <th>Date</th>
//                        <th>Temp. (C)</th>
//                        <th>Temp. (F)</th>
//                        <th>Summary</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {forecasts.map(forecast =>
//                        <tr key={forecast.date}>
//                            <td>{forecast.date}</td>
//                            <td>{forecast.temperatureC}</td>
//                            <td>{forecast.temperatureF}</td>
//                            <td>{forecast.summary}</td>
//                        </tr>
//                    )}
//                </tbody>
//            </table>
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//            : App.renderForecastsTable(this.state.forecasts);

//        return (
//            <div>
//                <h1 id="tabelLabel" >Weather forecast</h1>
//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }

//    async populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        this.setState({ forecasts: data, loading: false });
//    }
//}


