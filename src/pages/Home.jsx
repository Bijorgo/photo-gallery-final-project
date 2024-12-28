import { useState, useEffect } from "react"
import Form from "../components/Form"
import Gallery from "../components/Gallery"

export default function Home(){
    const [ photos, setPhotos ] = useState([])
    useEffect(() => {
        fetch("https://json-server-photo-gallery-project.onrender.com/photos")
        .then(r => r.json())
        .then(photoData => setPhotos(photoData))
        .catch(error => console.log(error))
    },[])

    return(
        <div> 
            <h1>This is the Home Page</h1>
            <Gallery photos={photos} />
            <Form />
        </div>
    )
}