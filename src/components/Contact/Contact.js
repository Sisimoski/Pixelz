import React from 'react'
import "./style.css"
function Contact() {
    return (
        <div class="contactContainer">
            <div class="row col-xs-12 col-sm-12">
                <h1>Skontaktuj się</h1>
            </div>
            <div class="row input-container">
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <input type="text" required />
                        <label>Imię</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" required />
                        <label>Adres email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" >
                        <input type="text" required />
                        <label>Numer telefonu</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>Wiadomość</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn">Wyślij wiadomość</div>
                </div>
            </div>
        </div>

    )
}

export default Contact
