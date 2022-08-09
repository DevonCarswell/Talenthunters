import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg" className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-talenthunters border-bottom box-shadow mb-3 justify-content-between">
            <Container className="container-fluid">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-text-top"
                        alt=""
                        title="Home"
                    />
                    </Navbar.Brand>
            </Container>
            <Container className="container-fluid">
            <Container className="navbar-nav flex-grow-1 justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                </Navbar.Collapse>
            </Container>
            </Container>
            <Container className="container-fluid justify-content-end">
                <Container className="justify-content-end">
                    <SplitButton
                        align={{ lg: 'start' }}
                        title="Profile"
                        id="dropdown-menu-align-responsive-2"
                    >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something 2</Dropdown.Item>
                        <Dropdown.Divider />
                    </SplitButton>
                </Container>





                {/*<NavDropdown title="Profile" id="dropdown-menu-align-responsive-2" className="dropdown">*/}
                {/*        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*        <NavDropdown.Item href="#action/3.2">*/}
                {/*            Another action*/}
                {/*        </NavDropdown.Item>*/}
                {/*        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*        <NavDropdown.Divider />*/}
                {/*        <NavDropdown.Item href="#action/3.4">*/}
                {/*            Separated link*/}
                {/*        </NavDropdown.Item>*/}
                {/*    </NavDropdown>*/}
               
            </Container>
        </Navbar>
    );
}

export default BasicExample;

//return (
//    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-talenthunters border-bottom box-shadow mb-3 justify-content-between">
//        <div className="container-fluid">
//            <a className="navbar-brand" ><img src="/img/logo.png" alt="" height="40" className="d-inline-block align-text-top" /></a>
//            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
//                aria-expanded="false" aria-label="Toggle navigation">
//                <span className="navbar-toggler-icon"></span>
//            </button>
//        </div>
//        <div className="container-fluid">
//            <div className="navbar-collapse collapse d-sm-inline-flex">
//                <ul className="navbar-nav flex-grow-1 justify-content-center">
//                    <li className="nav-item">
//                        <a className="nav-link px-sm-0 px-2" title="Home" ><i className="bi bi-house-door-fill"></i></a>
//                    </li>
//                    <li className="nav-item">
//                        <a className="nav-link px-sm-0 px-2" title="About" ><i className="bi bi-people-fill"></i></a>
//                    </li>
//                    <li className="nav-item">
//                        <a className="nav-link px-sm-0 px-2" title="Contacts"><i className="bi bi-telephone-fill"></i> </a>
//                    </li>
//                </ul>
//            </div>
//        </div>
//        <div className="container-fluid justify-content-end">
//            <div className="dropdown">
//                <a href="#" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />

//                    <span className="d-none d-sm-inline mx-1">User</span>
//                </a>
//                <ul className="dropdown-menu dropdown-menu-light text-small shadow" style="right: 0; left: auto" >
//                    <li><a className="dropdown-item" href="#">My profile</a></li>
//                    <li><a className="dropdown-item" href="#">Calendar</a></li>
//                    <li><a className="dropdown-item" href="#">Settings</a></li>

//                    <li>
//                        <hr className="dropdown-divider" />
//                    </li>
//                    <li><a className="dropdown-item" href="#">Sign out</a></li>
//                </ul>
//            </div>
//        </div>
//    </nav>
//);

