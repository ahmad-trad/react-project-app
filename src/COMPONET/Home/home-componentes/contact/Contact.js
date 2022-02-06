import React from "react";
import './contact.css';

function Contact(){
    return(
        <>
     <div className="contact">
        <div className="container">
            <div className="info">
            <p className="label">Feel free to drop us a line at:</p>
            <a href="mailto:leonagency@mail.com?subject=Contact" className="link">leonagency@mail.com</a>
            <div className="social">
                Find Us On Social Networks
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Contact;