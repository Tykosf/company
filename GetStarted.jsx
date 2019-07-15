import React from 'react';
import { Button } from 'semantic-ui-react';
import { Zoom } from 'react-reveal';

const GetStarted = () => (
    <section id='Start' className='getStarted'>
      <Zoom top>
        <h2>get started now</h2>
        <p>Try to work with us. <br /> 
          Contact with us just by using one click.
        </p>
        <Button inverted size='massive' color='blue'>
            Get Started
        </Button>
      </Zoom>
    </section>

);


export default GetStarted;