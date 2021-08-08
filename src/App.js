import Nav from './Nav.jsx'
import About from './About.jsx'
import Projects from './Projects'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'

function App() {
  return (
    <div>
      <Particles 
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}/>
      <Nav/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    


  );
}

export default App;
