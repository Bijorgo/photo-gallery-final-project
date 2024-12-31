export default function DetailCard( {details} ){
    return(
        <div>
           <img src={details.url} alt={details.alt}/>
            <h4>{details.detail}</h4>
            <h3>Location: {details.location}</h3>
            <h5>{details.date}</h5>
            <h6>Photograph by: {details.photographer}</h6>
        </div>
    )
}