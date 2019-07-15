import React from 'react';
import Card  from './Card';
import  Fade  from 'react-reveal/Fade';
import CardsData from './CardsData';

const services = CardsData.map( (obj, index) => <Card key={index} {...obj} /> );

const Services = () => (
    <section id='OurServices'>
        <Fade right>
            <div className='services-header'>
                <h2>Our Services</h2>        
                <div className='bottom-line'></div>
            </div>
        </Fade>
        
        <Fade left>
            <div className='wrapper'> 
                {services}
            </div>
        </Fade>
    </section>
);


export default Services;