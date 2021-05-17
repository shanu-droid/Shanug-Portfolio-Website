import Slider from 'infinite-react-carousel';
import './Certificate.css'
import htmlcerti from './htmlcerti.png'
import javascerti from './javasccerti.png'
import merncerti from './merncerti.png'
import javacerti from './javacerti.png'
import javanewcerti from './javanewcerti.png'
import dsalgocerti from './dsalgocerti.png'
import androcerti from './androcerti.png'

const Certificate = () => {
    const Card = ({src, name}) => {
        return (
            <div className="card">
            <div className="box">
                <img src={src}/>
                <div className="text">
                  {name}
                </div>
            </div>
        </div>
        )
    }
    return (
       <section className="certi" id="certi">
       <div className="max-width">
           <h2 className="title">My Certification</h2>
           <div className="allcerti">
               <Card src={htmlcerti} name="HTML, CSS & Bootstrap"/>
               <Card src={javascerti} name="Modern Javascript for Reactjs"/>
               <Card src={merncerti} name="Full Stack MERN Bootcamp "/>
               <Card src={javacerti} name="CCA Java Level 1"/>
               <Card src={javanewcerti} name="CCA Java Level 2"/>
               <Card src={dsalgocerti} name="Ds & Algo"/>
               <Card src={androcerti} name="Android Development course"/>
           </div>
       </div>
       </section>
    )
}

export default Certificate
