import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";

export default function Details(){
    const params = useParams();
    const selectPhoto = params.id;
    const [ details, setDetails ] = useState("")
    useEffect( () => {
            fetch(`https://json-server-photo-gallery-project.onrender.com/photos/${selectPhoto}`)
            .then( r => r.json())
            .then( photoData => setDetails(photoData))
            .catch( error => console.error(error))
        },[])
    return(
        <div> 
            <DetailCard details={details}/>
        </div>
    )
}