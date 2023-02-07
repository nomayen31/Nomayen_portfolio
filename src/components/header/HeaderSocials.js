import React from 'react'; 
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFacebookMessenger} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/nomayen31/' rel='social link' target='_blank'><FaLinkedin></FaLinkedin></a>
            <a href='https://www.github.com/nomayen31/' rel='social link' target='_blank'><FaGithub></FaGithub></a>
            <a href='http://www.instagram.com/nomayen31/' rel='social link'target='_blank'><FaInstagram></FaInstagram></a>
            <a href='http://www.whatsapps.com/01760843880/'  rel='social link' target='_blank'><FaWhatsapp></FaWhatsapp></a>
            <a href='https://www.facebook.com/messages/t/100015772542511'  rel='social link' target='_blank'><FaFacebookMessenger></FaFacebookMessenger></a>
          
        </div>
    );
};

export default HeaderSocials;