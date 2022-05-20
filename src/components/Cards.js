import star from '../images/star.svg'
import katie from "../images/katie-zaferes.jpg"
import bride from "../images/bride.png"
import bike from "../images/bike.png"

function Card(props){
    return(
        <div className='card'>
            <img src={props.img} alt="" className='card-profile'></img>
            <div className='review'>
                <img src={star} alt="" className='star'></img>
                <p>{parseFloat(props.score).toFixed(1)} ({props.reviews}) - {props.place}</p>
            </div>
            <p>{props.text}</p>
            <div className='price'>
                <p className='bold'>From ${props.price}</p>
                <p>/ person</p>
            </div>
        </div>
    )
} 

export default function Cards(){
    return(
        <div className='roulette'>
            <Card 
                img={katie}
                score={5}
                reviews={6}
                text={"Life lessons with Katie Zaferes"}
                place={"USA"}
                price={135}
            />
            <Card
                img={bride}
                score={5}
                reviews={30}
                text={"Learn wedding photography"}
                place={"USA"}
                price={125}
            />
            <Card
                img={bike}
                score={4.8}
                reviews={2}
                text={"Group Mountain Biking"}
                place={"USA"}
                price={50}
            />
            
        </div>
    )
} 