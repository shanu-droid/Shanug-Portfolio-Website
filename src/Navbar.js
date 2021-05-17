import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import './Navbar.css'
import {Link} from 'react-scroll'
import { icons } from 'react-icons';

const Navbar = () => {
    const [show, handleShow] = useState(false)
    const [isActive, setActive] = useState("false");



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false)
        });
        return () => {
          window.removeEventListener("scroll", () => {handleShow(false)})
        }
    }, [])
    const handleToggle = () => {
      setActive(!isActive);
    };

   

    return (
        <nav className={`navbar ${show && "navbar_back"}`}>
        <div className="max-width">
       
        <div className="logo">
          <a href="#">Portfo<span>lio..</span></a>
          </div>
         
          <ul className={`menu ${isActive && "active"}`} >
            <li ><Link className="tag" to="home" spy={true} smooth={true} onClick={handleToggle}>Home</Link></li>
            <li ><Link className="tag" to="about" spy={true} smooth={true}>About</Link></li>
            <li ><Link className="tag" to="projects" spy={true} smooth={true} onClick={handleToggle}>Projects</Link></li>
            <li ><Link className="tag" to="skills" spy={true} smooth={true} onClick={handleToggle}>Skills</Link></li>
            <li ><Link className="tag" to="certi" spy={true} smooth={true}  onClick={handleToggle}>Certificates</Link></li>
            <li ><Link className="tag" to="contact" spy={true} smooth={true} onClick={handleToggle}>Contact</Link></li>
            
          </ul>
          <div className="menu-btn" onClick={handleToggle}>
          <FontAwesomeIcon icon={faAlignJustify} />
          </div>
        </div>
          
        </nav>
    )
}

export default Navbar
