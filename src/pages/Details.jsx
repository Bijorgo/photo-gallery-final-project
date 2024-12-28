import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Details(){
    const params = useParams();
    const selectPhoto = params.id;
    const [ details, setDetails ] = useState("")
    useEffect( () => {
            fetch(`https://json-server-photo-gallery-project.onrender.com/photos/${selectPhoto}`)
            .then( r => r.json())
            .then( photoData => setDetails(photoData))
            .catch( error => console.error(error))
        })
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