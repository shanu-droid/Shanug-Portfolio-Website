import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faTshirt, faFileVideo, faClipboardCheck, faFile } from '@fortawesome/free-solid-svg-icons'
import './Projects.css'

const Projects = () => {


    return (
        <section className="projects" id="projects">
         <div className="max-width">
         <h2 className="title">My Projects</h2>
           <div className="projects-content">
              <div className="card">
                  <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faFilm} /></div>
                 
                    <div className="text">
                      <a href="https://netflix-clone-627fc.web.app/">Netflix-Clone</a>
                    </div> 
                     <ul>
                       <li>Made Netflix clone frontend with Reactjs</li>
                       <li>Integrated TMBD API to get movie data</li>
                       <li>Used Firebase for backend</li>
                       <li>Used YouTube player component and Movie Trailer component to play trailer of movie</li>
                     </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faTshirt} /></div>
                 
                    <div className="text">
                       <a href="https://github.com/shanu-droid/T-shirt-selling-ecommerce-website">E-Commerce(T-shirt store)</a>
                    </div> 
                    <ul>
                      <li>Created an e-Commerce website for T-shirts</li>
                      <li>Used MongoDB, NodeJS and Express for backend</li>
                      <li>Created UI from scratch with ReactJS</li>
                      <li>Integrated two payment gateways, Stripe and PayPal</li>
                    </ul>
                  
                  </div>
              </div>
              <div className="card">
              <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faFileVideo} /></div>
              
                <div className="text">
                  <a href="https://playaroundwithmovies.herokuapp.com/">PlayAround Movie Dasboard</a>
                </div> 
                 <ul>
                   <li>Made a movie player dashborad</li>
                   <li>Integrated TMBD API to get movie data</li>
                   <li>Integrated wishlist functionality</li>

                 </ul>
              </div>
          </div>
          <div className="card short">
            <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faClipboardCheck} /></div>
              
                <div className="text">
                  <a href="https://shanu-droid.github.io/MyToDo/">Todo-App</a>
                </div> 
                <ul>
                  <li>A to-do list app made with ReactJs</li>
                </ul>
            </div>
          </div>
              <div className="card short">
                  <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faFile} /></div>
                 
                    <div className="text">
                      <a href="https://reimbursement-page.herokuapp.com/">Reimbursment Page</a>
                    </div> 
                     <ul>
                       <li>Made simple reimbursent page frontend with Reactjs</li>
                     </ul>
                  </div>
              </div>
              
           </div>
         </div>
       
       </section>
    )
}

export default Projects
