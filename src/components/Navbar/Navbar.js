import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../media/baner.jpg"
import { NavLink } from 'react-router-dom';
import login from "../../media/login.png"
import "./style.css"
function SNavbar() {
    return (
        <div className="navbarr">
            <Navbar className="NavbarFully" collapseOnSelect expand="lg" >
                <Navbar.Brand href="#home"><img className="logo" alt="img" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="NavOptions">
                        <Nav className="mr-auto">
                            <Nav.Link to="" activeClassName="nav-item nav-link active" className="Aboutus" >About Us</Nav.Link>
                            <Nav.Link to="" activeClassName="nav-item nav-link active" className="Products" >Products</Nav.Link>
                            <Nav.Link to="" activeClassName="nav-item nav-link active" className="Contact" >Contact</Nav.Link>
                            <div id="indicator"></div>
                        </Nav>
                    </div>

                    <Nav.Link to="" activeClassName="nav-item nav-link active" className="login" ><img className="loginicon" alt="img" src={login} /> <b>Login</b></Nav.Link>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

export default SNavbar;
