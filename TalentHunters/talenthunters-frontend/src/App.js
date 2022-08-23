import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import EmployeeManagement from './pages/EmployeeManagement';
import DivisionManagement from './pages/DivisionManagement';
import AddEmployee from './pages/AddEmployee'



function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/employee-management' element={<EmployeeManagement />} />
                <Route path='/division-management' element={<DivisionManagement />} />
                <Route path='/addemployee' element={<AddEmployee />} />
            </Route>
        </Routes>

    );
}

export default App;

