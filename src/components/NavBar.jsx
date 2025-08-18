import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

function NavBar() {
    return (
        <>
            <nav>
                <NavLink to="/">
                    <h2>Movies API</h2>
                </NavLink>
                <section>{/* <NavLink to="/">Home</NavLink> */}</section>
            </nav>
        </>
    );
}

export default NavBar;
