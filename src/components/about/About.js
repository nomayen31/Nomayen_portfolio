import React from 'react';
import './About.css'
import ME from '../../assets/img/Yellow Simple Depop Profile Picture.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BiLibrary } from 'react-icons/bi'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>about Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Image'></img>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>150+ WorldWide</small>
                        </article>
                        <article className='about__card'>
                            <BiLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>
                        <p>Hello! I'm Nomayen Hossain, a passionate MERN stack Developer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I study in Computer Engineering from Feni Computer Institute at Feni, Bangladeshin . I am available for any kind of job opportunity that suits my interests.</p>

                        <a href='#contact' className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
