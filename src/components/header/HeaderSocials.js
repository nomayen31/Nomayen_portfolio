import React from 'react'; 
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/nomayen31/' target='_blank'><FaLinkedin></FaLinkedin></a>
            <a href='https://www.github.com/in/nomayen31/' target='_blank'><FaGithub></FaGithub></a>
            <a href='http://www.instagram.com/nomayen31/' target='_blank'><FaInstagram></FaInstagram></a>
          
        </div>
    );
};

export default HeaderSocials;