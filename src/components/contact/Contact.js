import React from 'react';
import './Contact.css'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (

        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMailOpen />
                        <h4>Email</h4>
                        <h5>nomayen.ohin@gmail.com</h5>
                        <a href='mailto:nomayen.ohin@gmail.com' target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsMessenger />
                        <h4>Messenger</h4>
                        <h5>Nomayen Hossain Ohin</h5>
                        <a href="https://m.me/nomayenhossainohin" target="_blank">
                            Message Me on Facebook
                        </a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        {/* <a href='https://api.whatsapp.com/send?phone=+8801760843880' target="_blank">Send a message</a> */}
                        <a href='https://wa.me/017460843880' target="_blank">Send a message</a>
                    </article>
                </div>
                <form action=''>
                    <input type="text" name='name' placeholder='Your Full Name' required></input>
                    <input type="email" name='email' placeholder='Your Email' required></input>
                   <textarea name='message' placeholder='Your Message' required id=''rows="7"/>
                   <button type='submit' className=' btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>

    );
};

export default Contact;