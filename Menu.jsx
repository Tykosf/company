import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

const HeaderMenu = () => {
    return (
      <Menu >
        <Menu.Item>
          <Image src={require('../images/logo.png')} alt='logo' size='mini' />
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item><a href='/'>Home</a></Menu.Item>
            <Menu.Item><a href='#OurServices'>Our Services</a></Menu.Item>
            <Menu.Item><a href='#AboutUs'>About us</a></Menu.Item>
            <Menu.Item><a href='#Start'>Get Started</a></Menu.Item>
        </Menu.Menu>
      </Menu>
    );
}


export default HeaderMenu;
