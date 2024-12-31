import { useState, useEffect } from "react"
import Form from "../components/Form"
import Photos from "../components/Photos"

export default function Gallery(){
    const [ photos, setPhotos ] = useState([])

    // Initial fetxh GET request
    useEffect(() => {
        fetch("https://json-server-photo-gallery-project.onrender.com/photos")
        .then(r => r.json())
        .then(photoData => setPhotos(photoData))
        .catch(error => console.log(error))
    },[])

    const addNewPhoto = (newPhoto) => {
        setPhotos( origPhotos => [... origPhotos, newPhoto])
    }

    return(
        <div> 
            <h1 className="bg-red-500 text-white">This is the Home Page</h1>
            <div className="flex flex-wrap gap-4 justify-center">
               <Photos photos={photos} /> 
            </div>
            
            <Form addNewPhoto={addNewPhoto}/>
        </div>
    )
}