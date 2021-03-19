import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../media/baner.jpg"
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import "./style.css"
function SNavbar({ basketItems, totalCost }) {
    const location = useLocation();
    return (
        <div className="navbarr">
            <Navbar className="NavbarFully" collapseOnSelect expand="lg" >
                <Navbar.Brand href="#home"><img className="logo" alt="img" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="NavOptions">
                        <Nav className="mr-auto">
                            <Nav.Link to="" className="Aboutus" >O nas</Nav.Link>
                            <Nav.Link to="" className="Products" >Produkty</Nav.Link>
                            <Nav.Link to="" className="Contact" >Kontakt</Nav.Link>
                            <div id="indicator"></div>
                        </Nav>
                    </div>
                    <div className="basketContainer">
                        {location.pathname === "/basket" ? (
                            <div className="basket-wrapper">
                                <h2>
                                    Total cost: <strong>{totalCost}</strong>
                                </h2>
                            </div>
                        ) : (
                            <div className="basket-wrapper">
                                <IconButton
                                    component={Link}
                                    to="/basket"
                                    aria-label="Show basket contents"
                                    color="inherit"
                                >
                                    <Badge badgeContent={basketItems} color="secondary">
                                        <ShoppingCart className="custom-basket" />
                                    </Badge>
                                </IconButton>
                            </div>
                        )}
                    </div>

                    <form className="form-inline">
                        <button className="btn1" type="button" id="myBtn">Zarejestruj się</button>
                    </form>
                    <form className="form-inline">
                        <button className="btn" type="button" id="myBtn">Zaloguj się</button>
                    </form>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

export default SNavbar;
