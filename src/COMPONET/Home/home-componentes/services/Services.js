import React, { useRef, useEffect } from "react";
import './services.css';
import gmi from '../../../images/mount.jpg';
import { gsap , Power3} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services(){

    let image = useRef();

    useEffect(() => {
      gsap.to(image.current, {
        scrollTrigger: {
          trigger: image.current,
          toggleActions: "restart none none none"
        },
        x: 0,
        opacity: 1,
        duration: .4,
        delay: 1.6,
        ease: Power3.easeOut

      })
    }, [])

    return(
        <>
        <div className="services-content">
          <div className="col">
          
            <div className="srv">
              <i className="fas fa-palette fa-2x"></i>
              <div className="text">
                <h3>Graphic Design</h3>
                <p>
                  Graphic design is the process of visual communication and problem-solving using one or more of
                  typography, photography and illustration.
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fab fa-sketch fa-2x"></i>
              <div className="text">
                <h3>UI & UX</h3>
                <p>
                  Process of enhancing user satisfaction with a product by improving the usability, accessibility, and
                  pleasure provided in the interaction.
                </p>
              </div>
            </div>
           
          </div>
          <div className="col">
            <div className="srv">
              <i className="fas fa-vector-square fa-2x"></i>
              <div className="text">
                <h3>Web Design</h3>
                <p>
                  Web design encompasses many different skills and disciplines in the production and maintenance of
                  websites.
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fas fa-pencil-ruler fa-2x"></i>
              <div className="text">
                <h3>Web Development</h3>
                <p>
                  Web development is a broad term for the work involved in developing a web site for the Internet or an
                  intranet.
                </p>
              </div>
            </div>
            
          </div>
          <div className="col">
            <div className="image image-column">
              <img ref={image} src={gmi} alt="img" />
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Services;