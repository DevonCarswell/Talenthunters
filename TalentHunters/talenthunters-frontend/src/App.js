import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Management from './pages/Management';



function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/management' element={<Management />} />
            </Route>
        </Routes>

    );
}

export default App;

