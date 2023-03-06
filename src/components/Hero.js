import sectionImage from "../images/airbnb-section.png";
export default function Hero(){
    return(<section className="hero">
        <img src={sectionImage} alt ="no img" className="hero--img"></img>
        <h1 className="hero--title">Online Experience</h1>
        <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </section>)
}