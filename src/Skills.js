import ProgressBar from "@ramonak/react-progress-bar";
import './Skills.css'

const Skills = () => {

    const Bars = ({sub, perc}) => {
        return (
            <div className="bars">
            <div className="info">
                <span >{sub}</span>
                <div className="progressbar">
                <span>{perc} %</span>
                <ProgressBar completed={perc} bgColor="#8b0649" baseBgColor="black" width="100%" height="12px" isLabelVisible={false}/>
                </div> 
            </div> 
            </div>
        )
        
    }
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills & expriences.</div>
                        <p>I started my development & coding journey with Android Development which I liked doing. Soon after my interest moved towards JavaScript, HTML, and CSS which fascinated me to went for ReactJS or Front-end development. Since then I improved myself each day and explored more possibilities with React.</p>

                        <p>I've made several Apps with React like Netflix Clone, Movie Player Dashboard, Complete MERN Stack e-Commerce App, and this portfolio App itself.</p>
                        
                        <p>I'm also good in Basic Data Structure & Algorithms with Java and like to learn and solve problems from time to time.</p>
                        <a href="#">Read more..</a>
                    </div>
                    <div className="column right">
                        <Bars sub="HTML" perc="60"/>
                        <Bars sub="CSS" perc="60"/>
                        <Bars sub="Javascript" perc="50"/>
                        <Bars sub="Reactjs" perc="70"/>
                        <Bars sub="Bootstrap" perc="60"/>
                        <Bars sub="java" perc="80"/>
                        <Bars sub="Ds & Algo" perc="65"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
