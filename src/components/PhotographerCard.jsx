export default function PhotographerCard( {photographers} ){
    return(
        <div className="flex flex-wrap gap-8 justify-center"> 
            {photographers.map( photographer => (
                <div 
                    key={photographer.id} 
                    className="w-80 bg-gray-700 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all"
                >
                    <h1 className="text-2xl font-semibold text-neonBlue hover:text-neonCyan transition-all mb-4">
                        {photographer.name}
                    </h1>

                    <img 
                        src={photographer.url} 
                        alt={photographer.alt}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <p className="text-lg text-darkBlue">Bio: {photographer.bio}</p>
                </div>
        ))}</div>
    )
}