import { useEffect, useState } from "react"

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
                {photographers.map( photographer => (
                    <div key={photographer.id} >
                    <h1>{photographer.name}</h1>
                    <img src={photographer.url} alt={photographer.alt}/>
                    <p>Bio: {photographer.bio}</p>
            </div>
            ))}
        </div>
        
    )
}