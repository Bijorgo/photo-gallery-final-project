import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <div className="min-h-screen text-white flex flex-col justify-center items-center py-12 px-6">
            <h1 className="text-6xl font-bold text-center text-neonPink mb-8 hover:text-neonCyan hover:animate-neonGlow transition-all">
                Ruh roh, something went wrong!
            </h1>

            <p className="text-xl mb-6 text-center text-neonGreen">
                Don't worry, let's get you back to safety.
            </p>

            <Link
                to="/"
                className="text-xl bg-neonYellow text-darkBlue py-2 px-6 rounded-full glowButton hover:animate-neonGlow transition-all"
            >
                HOME
            </Link>
        </div>
    )
}