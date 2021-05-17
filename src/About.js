import React from 'react'
import './About.css'
import mypic from "./mypick.jpeg"
import resume from './resume.pdf'

const About = () => {
    return (
       <section className="about" id="about">
         <div className="max-width">
         <h2 className="title">About me</h2>
           <div className="about-content">
               <div className="column left">
                   <img src={mypic}></img>
               </div>
               <div className="column right">
                   <div className="text">
                       I'm Shanu and I'm a <span>FrontEnd Developer</span>
                   </div>
                   <p>Courteous and enthusiastic, I am interested in programming and software development, always curious to explore more. I recently began to be fascinated by MERN Stack Development, mostly React Development in it. Always love to learn more while developing new applications. Always ready for new Innovative ideas, a fast learner and always keep working hard for my end goals.</p>
                   <a href={resume} download>Download Resume</a>
               </div>
           </div>
         </div>
       
       </section>
    )
}

export default About
