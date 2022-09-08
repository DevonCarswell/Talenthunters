import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import authHeader from '../helper/AuthHeader';

const about = () => {
    const header = authHeader();
    console.log(header);
    console.log(`'Authorization': 'Basic ' + ${window.btoa('dalma.csernok@talenthunters.com:7KHnP4yZ')}`);
    return (
        <>
    <div className="blabla">
        <h1>About</h1>
     
        <div>
        <p><strong>TalentHunters</strong>, a company dealing with ERP systems, started its activities in July 2022. Our company aims to make life easier for both employees and employers by implementing properly optimized enterprise resource planning system.
        The main functions of TalentHunters, which promote the smooth operation of everyday and long-term work:</p>
        <ul>
        <li><Link to='/management' className="nav-link">User Management System for Admins</Link></li> 
        </ul>
                </div>
        </div>
        </>
        )
}

export default about;