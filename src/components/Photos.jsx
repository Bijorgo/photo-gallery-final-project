import { Link } from "react-router-dom"

export default function Photos({ photos }){
    return(
        <div className="bg-backgroundDark min-h-screen">
            <h2 className="text-center text-6xl font-bold text-neonYellow mb-6 hover:text-neonCyan hover:animate-neonGlow transition-all">
                Welcome to the gallery
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {photos.map( photo => (
                <div 
                    key={photo.id} 
                    className="w-64 bg-#333333 border-8 border-darkBlue rounded-none overflow-hidden shadow-lg flex flex-col items-center"
                >
                    <img 
                        src= {photo.url} 
                        alt= {photo.alt} 
                        className="w-full h-64 object-cover"
                    />
                    <div className="flex-grow" />
                    <Link 
                        to={`/details/${photo.id}`} 
                        className="mt-4 text-center bg-neonBlue text-black py-2 px-4 rounded-md font-semibold hover:bg-neonBlue hover:text-black hover:animate-neonGlow transition-all"
                    >
                        View Info
                    </Link> 
                </div>
            ))}
            </div>
            
        </div>
    )
}