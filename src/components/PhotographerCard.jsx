export default function PhotographerCard( {photographers} ){
    return(
        <div> 
            {photographers.map( photographer => (
                <div key={photographer.id} >
                    <h1>{photographer.name}</h1>
                    <img src={photographer.url} alt={photographer.alt}/>
                    <p>Bio: {photographer.bio}</p>
                </div>
        ))}</div>
    )
}