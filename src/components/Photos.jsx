import { Link } from "react-router-dom"

export default function Photos({ photos }){
    return(
        <div>
            <h2 className="text-center text-2xl mb-6">This is the Photos Component</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {photos.map( photo => (
                <div key={photo.id} className="w-64 h-80 bg-gray-200 rounded-md overflow-hidden shadow-lg flex flex-col items-center">
                    <img src= {photo.url} alt= {photo.alt} className="w-full h-64 object-cover"/>
                    <Link to={`/details/${photo.id}`} className="mt-4 text-center text-blue-500 hover:text-blue-700 font-semibold">
                        View Info
                    </Link> 
                </div>
            ))}
            </div>
            
        </div>
    )
}