import React, {useRef , useEffect} from 'react';
import './silde.css';
import { gsap , Power3} from 'gsap';

function Sildeimag(){

    let headOne = useRef();
    let pragOne = useRef();

    useEffect(() => {
        gsap.to(headOne.current , { y: 0 , delay: 1 , opacity: 1 , ease: Power3.easeOut, duration: .3 });
        gsap.to(pragOne.current , { y: 0 , delay: 2 , opacity: 1 , ease: Power3.easeOut, duration: .3 });
    }, [])
    
    return(
        <>
        <div className='contanira-silde'>
            <h1 ref={headOne} >Hello There!</h1>
            <p ref={pragOne}>We are Leon - Super Creative & Minimal 
            Agency  Web Template</p>
            <div className='overliert'></div>
        </div>
        </>
    )

}

export default Sildeimag;