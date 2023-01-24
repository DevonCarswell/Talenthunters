import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';



const  CollapsibleExample = () => {

    let authUser = JSON.parse(localStorage.getItem('authUser'));
    let navigate = useNavigate();

    function logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#07e3be' }}>
            <Container>
                <Link to="/" className="navbar-brand"><img src={logo} alt="" height="40"></img></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/about' className="nav-link"><i className="bi bi-people-fill"></i> About</Link>
                        <Link to='/contacts' className="nav-link"><i className="bi bi-telephone-fill"></i> Contacts</Link>
                        {localStorage.getItem('authUser') ? 
                        <Link to='/employee-management' className="nav-link"><i className="bi bi-person-workspace"></i>Management</Link> : ""}  
                    </Nav>
                    {localStorage.getItem('authUser') ? 
                    <Nav>
                        <NavDropdown title={authUser.firstName + " " + authUser.lastName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Calendar
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=> logout()}>
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="#memes">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"></img>
                        </Nav.Link>   
                    </Nav> : <Nav></Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;