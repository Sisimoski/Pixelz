import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../media/baner.jpg"
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import "./style.css"
import Login from '../Login/login.js';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "500px",
        height: "60vh",
        border: "10px solid black",
        opacity: "0.67",
        zIndex: "10",
        borderRadius: "20px",
    }
};
function SNavbar({ basketItems, totalCost }) {
    const location = useLocation();
    function openPage() {
        window.location = '/register';
    }
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="navbarr">
                <Navbar className="NavbarFully" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="/"><img className="logo" alt="img" src={logo} /></Navbar.Brand>
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
                            <button onClick={openPage} className="btn1" type="button" id="myBtn">Zarejestruj się </button>
                        </form>
                        <form className="form-inline">
                            <button onClick={openModal} className="btn" type="button" id="myBtn">Zaloguj się</button>
                        </form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Witaj</h2>
                    <br />
                    <Login />

                </Modal>
            </div >
        </>
    );

}

export default SNavbar;
