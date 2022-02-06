import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import ime from '../images/logo.png';

function Header(){

    const [icon , setIcon] = useState(false);

    const handlerIcon = () => setIcon(!icon);

    return(
        <>
            <header>
                <div className='logo'>
                    <img src={ime}></img>
                </div>
                <div className='icon' onClick={handlerIcon}>
                        <i className={icon ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className={icon ? 'nav-menu active' : 'nav-menu'}>
                    <div className='navbar'>
                        <NavLink exact="true" to='/'>Home</NavLink>
                        <NavLink to='/servar'>Services</NavLink>
                        <NavLink to='/work'>Portfolio</NavLink>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;