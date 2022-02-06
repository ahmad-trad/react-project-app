import React, {useRef , useEffect} from "react";
import './pragraf.css';
import { gsap , Power2} from 'gsap' ;
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Pragraf(){

    let perantElement = useRef();
    let divIconOne = useRef();
    let divIconTwo = useRef();
    let divIconThre = useRef();



    useEffect(() => {
        gsap.to(divIconOne.current, {  
            scrollTrigger: { 
                trigger: perantElement.current,
                toggleActions: "restart restart none none"
            },
            x: 0,
            opacity: 1,
            delay: 1.2,
            duration: .6,
            ease: Power2.easeOut
    });

    gsap.to(divIconTwo.current, {  
        scrollTrigger: { 
            trigger: divIconTwo.current,
            toggleActions: "restart restart none none"
        },
        y: 0,
        opacity: 1,
        delay: 1.8,
        duration: .6,
        ease: Power2.easeOut
    });

    gsap.to(divIconThre.current, {  
        scrollTrigger: { 
            trigger: divIconThre.current,
            toggleActions: "restart restart none none"
        },
        x: 0,
        opacity: 1,
        delay: 2.4,
        duration: .6,
        ease: Power2.easeOut

    });

    }, [])

    return(
        <>
            <div ref={perantElement} className="contaniar">
                <div ref={divIconOne} className="icon-silde one">
                    <i className="far fa-edit"></i>
                    <h2>Tell Us Your Idea</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut lab</p>
                </div>

                <div ref={divIconTwo} className="icon-silde two">
                    <i className="far fa-paste"></i>
                    <h2>We Will Do All The Work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut lab</p>
                </div>

                <div ref={divIconThre} className="icon-silde thre">
                    <i className="far fa-paper-plane"></i>
                    <h2>Your Product is Worldwide</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut lab</p>
                </div>
            </div>
        </>
    )
}

export default Pragraf;