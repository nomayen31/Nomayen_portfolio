import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/port/port1.jpg'
import IMG2 from '../../assets/port/port2.jpg'
import IMG3 from '../../assets/port/port3.jpg'
import IMG4 from '../../assets/port/port4.jpg'
import IMG5 from '../../assets/port/port5.jpg'
import IMG6 from '../../assets/port/port6.jpg'


const data =[

    {
    id:1,
    image:IMG1,
    title:'Global and technology News',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    },
    {
    id:2,
    image:IMG2,
    title:'hello bangladesh',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    },
    {
    id:3,
    image:IMG3,
    title:'hello bangladesh',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    },
    {
    id:4,
    image:IMG4,
    title:'hello bangladesh',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    },
    {
    id:5,
    image:IMG5,
    title:'hello bangladesh',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    },
    {
    id:6,
    image:IMG6,
    title:'hello bangladesh',
    github:'https://github.com/nomayen31/donate-today-bangladesh',
    demo:'https://today-assignment-6.netlify.app',
    
    }
    ]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
               {
                data.map(({id, image, title, github, demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={image} alt={title}></img>
                    </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                        <a href={github} className='btn' target="_blank">Github</a>
                        <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
                    )
                })
               }
            </div>
        </section>
    );
};

export default Portfolio;