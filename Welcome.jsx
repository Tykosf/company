import React from 'react';
import { Icon } from 'semantic-ui-react';

const down = () =>{
  document.querySelector('.ui.menu').scrollIntoView({ 
    behavior: 'smooth' 
  });
};

const Welcome = () => (
    <div className="App">
    <header className="App-header">
      <p>
        Welcome to MyCompany
      </p>
      <div className='bounce'>
        <button className="arrButton" onClick={down}>
          <Icon className="arrowDown" name='arrow down' color="blue" />
        </button>
      </div>
    </header>
  </div>
);

export default Welcome;