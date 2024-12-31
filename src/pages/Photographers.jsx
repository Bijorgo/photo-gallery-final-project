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
        <div >
            <h2 className="text-center text-5xl font-bold text-neonYellow mb-12 hover:text-neonCyan hover:animate-neonGlow transition-all"> 
                Meet the Photographers
            </h2>
            <PhotographerCard photographers={photographers}/>
        </div>
        
    )
}