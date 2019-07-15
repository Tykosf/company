import React from 'react';
import {Fade, Roll} from 'react-reveal';

const About = () => (
    <section id='AboutUs' className='about'>
        <Roll left>
            <div className='about-header'>
                <h2>some words about us</h2>
                <div className='bottom-line'></div>
            </div>
        </Roll>
        <div className='about-container'>
            <Fade left>
                <img src={require('../images/office.jpg')} width='600px' alt='office' />
            </Fade>
            <Fade right>
                <ul>
                    <h3>Benefits</h3>
                    <li>Cozy office, work in a small team.</li>
                    <li>Official employment.</li>
                    <li>Flexible system of bonuses for the result.</li>
                    <li>Competitive salary level.</li>
                    <li>Possibility of career growth.</li>
                    <li>Work in a stable company.</li>
                </ul>
            </Fade>
        </div>
    </section>
);

export default About;