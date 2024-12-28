import { Link } from "react-router-dom"

export default function Gallery({ photos }){
    return(
        <div>
            <h2>This is the Gallery Component</h2>
            {photos.map( photo => (
                <div key={photo.id}>
                    <img src= {photo.url} alt= {photo.alt}/>
                    <Link to={`/details/${photo.id}`}>
                        View Info
                    </Link> 
                </div>
            ))}
        </div>
    )
}