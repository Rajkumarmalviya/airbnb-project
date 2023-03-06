
import star from "./Star1.png";
export default function Card(props){
    let badgetext;
    if(props.openSpots===0){
        badgetext="SOLD OUT"
    }else if(props.location==="Online"){
        badgetext="ONLINE"
    }
    return(
    <section className="card">
       {badgetext && <div className="card--badge">{badgetext}</div>}
    <img src={`/images/${props.coverImg}`} alt="no img" className="card--image"></img>
        <div className="card--stats">
            <img src={star} alt="no img" className="card--star"></img>
            <span >{props.stats.rating}</span>
            <span className="grey">({props.stats.reviewCount}) . </span>
            <span className="grey">{props.location}</span>
            
            
        </div>
        <p className="card--name">{props.title}</p>
            <p><span className="bold">From ${props.price}/</span>person</p>
    </section>)
}