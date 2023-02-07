import React from 'react';
import './About.css'
import ME from '../../assets/about1.png'
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
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                        <a href='#contact' className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
