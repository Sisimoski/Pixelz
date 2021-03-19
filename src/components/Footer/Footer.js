import React from 'react'
import logo from "../../media/baner3.png"
import "./style.css";
function Footer() {
    return (
        <div className="footerContainer">
            <div className="leftside">
                <p> Dane Kontaktowe:</p>
                <p> asdasd</p>
                <p> asdasd</p>
            </div>
            <div className="rightside">
                <img className="logo" alt="img" src={logo} />
            </div>
        </div>
    )
}

export default Footer
