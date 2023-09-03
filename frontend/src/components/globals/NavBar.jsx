import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { UserContext } from "../contexts/UserContext";
import Logout from "../Logout";

function NavBar() {
    const { user } = useContext(UserContext);

    if (user === undefined) return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Rick and Morty logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        <GiArchiveRegister className="login-logo" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

    if (user && !user.payload.isAdmin) return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Rick and Morty logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        <Logout />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

    if (user && user.payload.isAdmin) return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Rick and Morty logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin">
                        <RiAdminLine />
                    </NavLink>
                    <NavLink to="/login">
                        <Logout />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;