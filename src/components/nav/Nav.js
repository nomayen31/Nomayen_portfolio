import React, { useState } from 'react';
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookAdd,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {GiSwordsPower} from 'react-icons/gi'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
const Nav = () => {
    const [activeNav , setActiveNav] =useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome></AiOutlineHome></a>
            <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : '' } ><AiOutlineUser></AiOutlineUser></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : '' }  ><BiBookAdd></BiBookAdd></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active' : '' } ><GiSwordsPower></GiSwordsPower></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : '' } ><BiMessageSquareDetail></BiMessageSquareDetail></a>
            <a href='https://medium.com/@nomayen.ohin' target="_blank" ><BsFillMenuButtonWideFill></BsFillMenuButtonWideFill></a>
        </nav>
    );
};

export default Nav;