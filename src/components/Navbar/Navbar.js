import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../media/baner.jpg"
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import "./style.css"
import Login from '../Login/login.js';

const customStyles = {
    content: {
        top: '60%',
        left: '50%',
        border: "none",
        background: '#black',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: "67vh",
        zIndex: "5",
        overflow: "hidden",
    }
};
function SNavbar({ basketItems }) {
    function openPage() {
        window.location = '/register';
    }
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
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
                                <Nav.Link href="#baner" to="/" className="Aboutus" >O nas</Nav.Link>
                                <Nav.Link href="#products" className="Products" >Produkty</Nav.Link>
                                <Nav.Link href="#contact" className="Contact" >Kontakt</Nav.Link>
                                <div id="indicator"></div>
                            </Nav>
                        </div>
                        <div className="basketContainer">
                            <div className="basket-wrapper">
                                <IconButton
                                    component={Link}
                                    to="/basket"
                                    aria-label="Show basket contents"
                                    color="inherit"
                                >
                                    <Badge badgeContent={basketItems} color="secondary">
                                        <ShoppingCart className="custom-basket" /><p className="koszyk">Koszyk</p>
                                    </Badge>
                                </IconButton>
                            </div>
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
                    <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
                    <Login />

                </Modal>
            </div >

        </>
    );
}

export default SNavbar;
