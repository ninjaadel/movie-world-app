import { Logo } from "../components/ui/logo";
import { Link } from "react-router-dom";
import { Search } from "../components/search/search";
import { useContext } from "react";
import {ThemeContext} from "../contexts.jsx/theme";
import { ThemeSelector } from "../contexts.jsx/themeSelector";
import { UserContext } from "../contexts.jsx/usserContext";
export function Navbar() {
    const { theme} = useContext(ThemeContext)
    const { watchList } = useContext(UserContext);

    const color = theme === "dark" ? "bg-dark text-light btn-outline-light": "bg-light text-dark btn-outline-dark"; // Tema değerini al ve kullan
    return (
        <div className={`navbar navbar-expand-lg bg-${theme} text-${theme} border-bottom border-body mb-0`}
>      
            <div className="container-fluid">

                <ul className={`navbar-nav me-auto mb-0 mb-lg-0 `}>
                    <ThemeSelector />
                    <Logo theme={color} />
                    <Link to="/" className={`nav-link active text-${color}`}>Home</Link>
                    <Link to="/movies" className={`nav-link active text-${color}`}>Movies</Link>


                </ul>
                <div className="d-flex">
                    <Search theme={color} />
                    <Link to="/register" className={`btn btn-outline-light ms-2 text-${color} bg-${color}`}>Register</Link>
                    <Link to="/login" className={`btn btn-outline-light ms-2 text-${color} bg-${color}`}>Login</Link>

                    
                    <Link to="/watchlist" className={`btn btn-${color} border position-relative ms-2`}>
                       <i className="bi bi-bookmark"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           { watchList.length } </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}