import React from 'react';
import './About.css'
import ME from '../../assets/about1.png'
import {FaAward}  from 'react-icons/fa'
import {FiUsers}  from 'react-icons/fi'
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
        <div className='about__container'>
            <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                </article>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                </article>
            </div>
        </div>
      </div>
       </section>
    );
};

export default About;