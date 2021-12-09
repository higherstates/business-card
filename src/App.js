import './App.css';
import React from 'react';
import Info from './components/Info'
import Footer from './components/Footer'
import Button from './components/Button'
import About from './components/About'
import Interests from './components/Interests'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas, fab);


function App() {
  return (
    <div className="card flex">
      <Info />
      <div className="buttons">
        <Button href="mailto:julie-lai@example.com">
          <FontAwesomeIcon className="btn-icon" icon={['fas', 'envelope']} />Email
        </Button>
        <Button href="https://www.linkedin.com/in/julielai333/" buttonStyle="btn--blue">
          <FontAwesomeIcon className="btn-icon" icon={['fab', 'linkedin']}  />LinkedIn
        </Button>
      </div>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
