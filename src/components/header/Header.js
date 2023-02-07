import React from 'react';
import './Header.css'
import CTA from './CTA';
import ME from '../../assets/img/8.png'
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
        <div>
            <header>
                <div className='container header__container'>
                    <h5 className='h5class'>Hello! I am</h5>
                    <h1>Nomayen Hossain Ohin</h1>
                    <h5 className='text-light'>Fullstack Developer</h5>
                    <CTA></CTA>

                    <HeaderSocials></HeaderSocials>

                    <div className='me'>
                        <img src={ME} alt=''></img>
                    </div>

                    <a href='#contact' className='scroll__down'>Scroll Down</a>



                </div>
            </header>
        </div>
    );
};

export default Header;