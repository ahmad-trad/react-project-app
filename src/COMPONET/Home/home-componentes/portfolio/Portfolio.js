import React from "react";
import imgo from '../../../images/protpholo-1.jpg';
import imgt from '../../../images/protpholo-2.jpg';
import imgh from '../../../images/protpholo-3.jpg';
import './Portfolio.css';

function Portfolio() {
    return(
        <>
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-content">
                <div className="card">
                    <img src={imgo} alt="img" />
                    <div className="info">
                    <h3>Project Here</h3>
                    <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={imgt} alt="img" />
                    <div className="info">
                    <h3>Project Here</h3>
                    <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={imgh} alt="img" />
                    <div className="info">
                    <h3>Project Here</h3>
                    <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio;