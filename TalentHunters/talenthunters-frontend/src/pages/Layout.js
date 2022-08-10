import { Outlet, Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer'

import React from 'react';

const layout = () => {
    return (
        <div> 
            <Nav />
            <div>
        <Outlet />
        </div>
        <Footer />
        </div>
        )
}

export default layout;