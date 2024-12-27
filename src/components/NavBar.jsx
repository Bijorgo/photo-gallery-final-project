import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/" className="navbar">Home</NavLink>
            <NavLink to="/photographers" className="navbar">Photographers</NavLink>
        </nav>
    )
}