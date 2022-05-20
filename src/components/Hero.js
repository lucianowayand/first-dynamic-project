import hero from "../images/hero.png"

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-banner">
                <img src={hero} alt=""></img>
            </div>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
            </div>
        </div>
    )
} 