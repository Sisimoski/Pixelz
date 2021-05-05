import React from 'react'
import logo from "../../media/baner3.png"
import "./style.css";
function Footer() {
    return (
        <div className="container-fluid footerBg border-top">
            <div className="row footerPadding">
                <div className="col-12 col-md-3">
                    <h6 className="mb-4 text-uppercase text-muted">Lorem ipsum</h6>
                    <p className="m-0 text-dark">Lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0">
                    <h6 className="mb-4 text-uppercase text-muted">Kontakt</h6>
                    <p className="m-0 text-dark">Opole, ul. Prószkowska 99</p>
                    <p className="m-0 text-dark">+44 345 678 903</p>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0">
                    <h6 className="mb-4 text-uppercase text-muted">Praca</h6>
                    <p className="m-0 text-dark">Szukamy pracownika. Wyślij CV na e-mail: pixelz@gmail.com</p>
                </div>
                {/* Mobile Social */}
                <div className="d-md-none col-12 col-sm-5 mt-4 mt-md-0 text-center text-secondary">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-facebook"></i>
                </div>
                {/* Dekstop Social */}
                <div className="d-none d-md-block ml-auto col-auto text-right text-secondary">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-facebook"></i>
                </div>
            </div>
        </div>

        // <div className="footerContainer">
        //     <div className="leftside">
        //         <p> Dane Kontaktowe:</p>
        //         <p> asdasd</p>
        //         <p> asdasd</p>
        //     </div>
        //     <div className="rightside">
        //         <img className="logo" alt="img" src={logo} />
        //     </div>
        // </div>
    )
}

export default Footer
