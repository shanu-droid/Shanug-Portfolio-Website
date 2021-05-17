import './Home.css'
import mypic from './mypic.jpeg'

const Home = () => {
    return (
        <section className="home" id="home">
        <div className="max-width">
        <div className="home-content">
         <div className="text-1">Hello, my name is</div>
         <div className="text-2">Shanu Gautam</div>
         <div className="text-3">And I'm a <span>FrontEnd Developer</span></div>   
         <a href="#contact">Hire me</a>
        </div>
      
        </div>

        </section>
    )
}

export default Home
