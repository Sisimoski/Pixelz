import React from 'react'
import "./style.css"
function Contact() {
    return (
        <div class="contactContainer">
            <div class="row col-xs-12 col-sm-12">
                <h1>contact us</h1>
            </div>
            <div class="row input-container">
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <input type="text" required />
                        <label>Name</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" required />
                        <label>Email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" >
                        <input type="text" required />
                        <label>Phone Number</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>

    )
}

export default Contact
