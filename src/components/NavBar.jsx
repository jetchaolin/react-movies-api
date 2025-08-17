import { useNavigate, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

function NavBar() {
    return (
        <>
            <nav>
                <h2>Movies API</h2>
                <section>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Favorites</NavLink>
                </section>
            </nav>
        </>
    );
}

export default NavBar;
