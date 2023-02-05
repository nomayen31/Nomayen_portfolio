import React, { useState } from 'react';
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookAdd,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
const Nav = () => {
    const [activeNav , setActiveNav] =useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome></AiOutlineHome></a>
            <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : '' } ><AiOutlineUser></AiOutlineUser></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : '' }  ><BiBookAdd></BiBookAdd></a>
            <a href='#services' onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : '' } ><RiServiceFill></RiServiceFill></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : '' } ><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </nav>
    );
};

export default Nav;