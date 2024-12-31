import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="bg-backgroundDark py-4 px-8 shadow-lg flex justify-center items-center space-x-4">
            <NavLink to="/" className="text-neonPink text-lg font-bold hover:text-neonCyan hover:animate-neonGlow transition-all">
                | Gallery | 
            </NavLink>
            <NavLink to="/photographers" className="text-neonBlue text-lg font-bold hover:text-neonGreen hover:animate-neonGlow transition-all">
                | Photographers |
            </NavLink>
            <NavLink to="/errorpage" className="text-neonYellow text-lg font-bold hover:text-neonPurple hover:animate-neonGlow transition-all">
                | Error | 
            </NavLink>
        </nav>
    )
}