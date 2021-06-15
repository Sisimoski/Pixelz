import React from 'react'
import "./style.css";
function Footer() {
    return (
        <div className="container-fluid footerBg border-top">
            <div className="row footerPadding">
                <div className="col-12 col-md-3">
                    <h6 className="mb-4 text-uppercase text-muted">Pixelz</h6>
                    <p className="m-0 text-dark">Twój najlepszy internetowy sklep z grami. Kupisz gry na najpopularniejsze platformy w najniższych cenach!</p>
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
                <div className="d-md-none col-12 mt-4 mt-md-0 text-center text-secondary">
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
    )
}

export default Footer
