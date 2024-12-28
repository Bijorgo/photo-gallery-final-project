import { useState } from "react"

export default function Form(){
    const [ url, setUrl] = useState("");
    const [ photographer, setPhotographer ] = useState("");
    const [ date, setDate ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ alt, setAlt ] = useState("");
    const [ detail, setDetails ] = useState();
    
    function handleSubmit(event) {
        event.preventDefault();
       
        fetch("https://json-server-photo-gallery-project.onrender.com/photos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url,
                photographer: photographer,
                date: date,
                location: location,
                alt: alt,
                detail: detail
            })
        })
        .then( r => r.json())
        .then( console.log("use state here to update the gallery view"))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add A Photograph</h3>
            <input type="text" name="url" placeholder="url" value={url} onChange={event => setUrl(event.target.value)}/>
            <input type="text" name="photographer" placeholder="photographer" value={photographer} onChange={event => setPhotographer(event.target.value)}/>
            <input type="text" name="date" placeholder="date" value={date} onChange={event => setDate(event.target.value)}/>
            <input type="text" name="location" placeholder="location" value={location} onChange={event => setLocation(event.target.value)}/>
            <input type="text" name="alt" placeholder="alt" value={alt} onChange={event => setAlt(event.target.value)}/>
            <input type="text" name="detail" placeholder="detail" value={detail} onChange={event => setDetails(event.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}