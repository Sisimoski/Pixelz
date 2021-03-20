import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../media/baner.jpg"
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import "./style.css"
import Login from '../Login/login.js';
import Register from '../register/register';
 
const customStyles = {
    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: '#black',
        transform: 'translate(-50%, -50%)',
        width: '65%',
        height: "67vh",
        zIndex: "5",
    }
};
class SNavbar extends React.Component {
    constructor() {
 
        super();
        this.state = {
            open: false,
            open2: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
    }
    openModal() {
        this.setState(
            { open: true });
    }
 
 
    closeModal() {
        this.setState(
            { open: false });
    }
 
    openModal2() {
        this.setState(
            { open2: true });
    }
 
 
    closeModal2() {
        this.setState(
            { open2: false });
    }
 
    render() {
        var subtitle;
        var subtitle;
        function afterOpenModal() {
            subtitle.style.color = 'black';
        }
        function afterOpenModal2() {
            subtitle.style.color = 'black';
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
                                <div className="basket-wrapper">
                                    <IconButton
                                        component={Link}
                                        to="/basket"
                                        aria-label="Show basket contents"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={"basketItems"} color="secondary">
                                            <ShoppingCart className="custom-basket" />
                                        </Badge>
                                    </IconButton>
                                </div>
                               
                            </div>
                            <form className="form-inline">
                                <button onClick={this.openModal} className="btn1" type="button" id="myBtn">Zarejestruj się </button>
                            </form>
                            <form className="form-inline">
                                <button onClick={this.openModal2} className="btn" type="button" id="myBtn">Zaloguj się</button>
                            </form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Modal
                        isOpen={this.state.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <Register />
 
                    </Modal>
                </div >
                <div>
                    <Modal
                        isOpen={this.state.open2}
                        onAfterOpen={this.afterOpenModal2}
                        onRequestClose={this.closeModal2}
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
}
 
export default SNavbar;