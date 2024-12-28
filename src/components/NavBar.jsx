import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/" className="navbar">
                | Gallery | 
            </NavLink>
            <NavLink to="/photographers" className="navbar">
                | Photographers |
            </NavLink>
            <NavLink to="/errorpage" className="navbar">
                | Error | 
            </NavLink>
        </nav>
    )
}