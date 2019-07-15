import React from 'react';
import Card from './Card';

const Footer = () => (
    <footer id='Contact'>
        <div className='wrapper'>
            <Card iconName='map marker alternate' description='Copernicus Street, 4 Lviv, Lviv region' inv={true} size='big'/>
            <Card iconName='mail' description='compant@gmail.com' inv={true} size='big'/>
            <Card iconName='phone' description='+380699991234' inv={true} size='big'/>
        </div>
    </footer>
);


export default Footer;