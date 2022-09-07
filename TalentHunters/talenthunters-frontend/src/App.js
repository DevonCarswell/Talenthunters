import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import EmployeeManagement from './pages/EmployeeManagement';
import DivisionManagement from './pages/DivisionManagement';
import AddEmployee from './pages/AddEmployee'
import AddDivision from './pages/AddDivision'
import DivisionEmployee from './pages/DivisionEmployee'
import Registration from './pages/Registration'
import { PrivateRoute } from './components/PrivateRoute';


function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <PrivateRoute exact path='/employee-management' element={<EmployeeManagement />} />
                <Route path='/division-management' element={<DivisionManagement />} />
                <Route path='/division-management/employees' element={<DivisionEmployee />} />
                <Route path='/addemployee' element={<AddEmployee />} />
                <Route path='/adddivision' element={<AddDivision />} />
                <Route path='/registration' element={<Registration />} />
            </Route>
        </Routes>

    );
}

export default App;

