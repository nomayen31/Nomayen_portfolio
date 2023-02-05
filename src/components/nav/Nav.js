import React from 'react';
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookAdd,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
const Nav = () => {
    return (
        <div>
            <a href='#'><AiOutlineHome></AiOutlineHome></a>
            <a href='#about'><AiOutlineUser></AiOutlineUser></a>
            <a href='#experience'><BiBookAdd></BiBookAdd></a>
            <a href='#services'><RiServiceFill></RiServiceFill></a>
            <a href='#contact'><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </div>
    );
};

export default Nav;