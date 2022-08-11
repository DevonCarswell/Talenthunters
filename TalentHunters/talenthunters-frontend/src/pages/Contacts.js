import React from 'react';
import Dalma from '../images/dalmacsernok.jpg';
import Zsolt from '../images/zsoltkasza.jpg';


const contacts = () => {
    return (
        <>
            <div className="text-center">
                <h1>Contacts</h1>
            </div>
            <div className="container text-center">
                <h5>Dalma Csernok - CEO</h5>
                <p><img src={Dalma} alt="" width="150" height="150" /></p>
                <p>+36 30/644-2697</p>
                <p><a href="mailto:dlmcsernok@gmail.com">dlmcsernok@gmail.com</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/dalmacsernok">Github Profile</a></p>
                <h5>Kasza Zsolt - CEO</h5>
                <p><img src={Zsolt}
                    alt="" width="150" height="150" /></p>
                <p>+36 70/948-9469</p>
                <p><a href="mailto:kaszazsolt90@gmail.com">kaszazsolt90@gmail.com</a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevonCarswell">Github Profile</a></p>
            </div>
        </>
    )
}

export default contacts;