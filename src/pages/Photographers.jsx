import { useEffect, useState } from "react"
import PhotographerCard from "../components/PhotographerCard";

export default function Photographers(){
    const [ photographers, setPhotographers] = useState([]);
    useEffect(() => {
        fetch("https://json-server-photo-gallery-project.onrender.com/photographers")
        .then( r => r.json())
        .then( photographerData => setPhotographers(photographerData))
    })
    return(
        <div>
            <h2> Meet the Photographers</h2>
            <PhotographerCard photographers={photographers}/>
        </div>
        
    )
}