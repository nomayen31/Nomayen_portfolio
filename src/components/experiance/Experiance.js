import React from 'react';
import './Experiance.css'
import {AiFillHtml5} from 'react-icons/ai'
import HTML from '../../assets/icon/html.svg'
import CSS from '../../assets/icon/css.svg'
// import HTML from '../../assets/icon/html.svg'
// import HTML from '../../assets/icon/html.svg'
// import HTML from '../../assets/icon/html.svg'

const Experiance = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={CSS} alt='nomayen hossain ohin' />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                        </div>
                </div>
                <div className='experience__backend'>
                <div className='experience__frontend'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experiance__details'>
                            <img src={HTML} alt='nomayen hossain ohin' />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                            </article>
                        </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Experiance;