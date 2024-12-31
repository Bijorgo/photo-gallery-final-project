export default function DetailCard( {details} ){
    return(
        <div className="min-h-screen bg-backgroundDark py-12 px-6">
            <h3 className="text-neonPink">
                Location: {details.location}
            </h3>

            <img 
                src={details.url} 
                alt={details.alt}
                className="w-full h-96 object-contain rounded-lg mb-6"
            />

            <h4 className="text-3xl font-bold text-darkBlue">
                {details.detail}
            </h4>

            <h5 className="text-lg text-neonPurple mb-2">
                {details.date}
            </h5>

            <h6 className="text-lg text-neonPink">
                Photograph by: {details.photographer}
            </h6>
        </div>
    )
}