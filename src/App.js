import Nav from './Nav.jsx'
import About from './About.jsx'
import Projects from './Projects'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <Nav/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    


  );
}

export default App;
