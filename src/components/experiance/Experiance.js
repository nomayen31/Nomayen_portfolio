import React from 'react';
import './Experiance.css'
import { AiFillHtml5 } from 'react-icons/ai'
import HTML from '../../assets/icon/html.svg'
import CSS from '../../assets/icon/css.svg'
import Bootstrap from '../../assets/icon/bootstarp.jpg'
import Tailwind from '../../assets/icon/telwindsvg.svg'
import javascript from '../../assets/icon/js.svg'
import Node from '../../assets/icon/node.svg'
import mongo from '../../assets/icon/mongo.svg'
import express from '../../assets/icon/express.svg'
import sql from '../../assets/icon/sql.svg'
import Php from '../../assets/icon/php.svg'
import react from '../../assets/icon/react.svg'


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
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experiance__details'>
                            <img src={CSS} alt='nomayen hossain ohin' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experiance__details'>
                            <img src={Bootstrap} alt='nomayen hossain ohin' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experiance__details'>
                            <img src={Tailwind} alt='nomayen hossain ohin' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experiance__details'>
                            <img src={javascript} alt='nomayen hossain ohin' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experiance__details'>
                            <img src={react} alt='nomayen hossain ohin' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <div className='experience__frontend'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            <article className='experiance__details'>
                                <img src={Node} alt='nomayen hossain ohin'  className='experiance__details-icon'/>
                                <div>
                                    <h4>Node JS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experiance__details'>
                                <img src={mongo} alt='nomayen hossain ohin' />
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experiance__details'>
                                <img src={express} alt='nomayen hossain ohin' />
                                <div>
                                    <h4>Express Js</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experiance__details'>
                                <img src={sql} alt='nomayen hossain ohin' />
                                <div>
                                    <h4>MySql</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experiance__details'>
                                <img src={Php} alt='nomayen hossain ohin' />
                                <div>
                                    <h4>PHP</h4>
                                    <small className='text-light'>intermediate</small>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiance;