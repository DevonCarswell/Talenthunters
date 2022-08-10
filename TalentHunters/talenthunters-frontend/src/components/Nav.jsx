import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><img src={logo} alt="" height="40"></img></Nav.Link>
                        <Nav.Link href="#pricing"><i className="bi bi-people-fill"></i> About</Nav.Link>
                        <Nav.Link href="#pricing"><i className="bi bi-telephone-fill"></i> Contacts</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Calendar
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="#memes">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"></img>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;