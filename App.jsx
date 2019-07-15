import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import HeaderMenu from './components/Menu';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import GetStarted from './components/GetStarted';


const App = () => {
  return (
    <div>
      <Welcome />
      <HeaderMenu />
      <Services />
      <About />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
