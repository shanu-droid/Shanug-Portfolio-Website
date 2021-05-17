import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Certificate from './Certificate';
import Contact from './Contact';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 500){
            handleShow(true);
        }else handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false)
      })
    }
}, [])

 
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};

  return (
    <div className="App">
    <div className={`scroll-up-btn ${show  && "show"}`}>
      <i className="fas fa-angle-up" onClick={scrollToTop}></i>
    </div>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Certificate/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
