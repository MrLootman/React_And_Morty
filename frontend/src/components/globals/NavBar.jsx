import { NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Rick and Morty logo" />
                    </NavLink>
                </li>
            </ul>
            <NavLink to="/login">
                <LuLogIn className="login-logo" />
            </NavLink>
        </nav>
    )
}

export default NavBar;