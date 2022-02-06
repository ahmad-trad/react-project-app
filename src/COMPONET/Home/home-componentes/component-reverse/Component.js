import React, { useEffect, useRef }  from "react";
import './component.css';
import { gsap , Elastic} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

 function Components(props) {

    let divService = useRef();

    useEffect(() => {
        gsap.to(divService.current, {
            scrollTrigger:{
                trigger:divService.current,
                toggleActions: "restart restart none none"
            },
            y: 0,
            opacity: 1,
            delay: 1,
            duration: .8,
            ease: Elastic.easeOut
        })
    },[])

    return(
        <>
        <div ref={divService} className="services">
            <h3>{props.head}</h3>
            <p>{props.prag}</p>
        </div>
        </>
    )
}

export default Components;