import { useState } from "react"

export default function Form({ addNewPhoto }){
    const [ url, setUrl] = useState("");
    const [ photographer, setPhotographer ] = useState("");
    const [ date, setDate ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ alt, setAlt ] = useState("");
    const [ detail, setDetails ] = useState();
    const [ error, setError ] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();

        // check if all fields are filled
        if (!url || !photographer || !date || !location || !alt || !detail) {
            setError("Please fill out all fields.");
            return; // prevents form from being submit in the event of a field not being filled out
        }

        // If all fields are filled, clear the error message
        setError("");

        // define new photo object sturcture
        const newPhoto = {
            url,
            photographer,
            date,
            location,
            alt,
            detail
        };
       
        // Send new photo to server
        fetch("https://json-server-photo-gallery-project.onrender.com/photos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPhoto)
        })
        .then( r => r.json())
        .then( photo => {
            // Add form info to newPhoto object
            addNewPhoto(photo);
            // Clear form fields after a submit
            setUrl("");
            setPhotographer("");
            setDate("");
            setLocation("");
            setAlt("");
            setDetails("");
        })
        .catch(error => console.log(error));
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