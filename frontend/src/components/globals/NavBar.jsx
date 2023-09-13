import { NavLink } from "react-router-dom";
import RickLogo from "../../assets/rick_logo.png";
import ContactIcon from "../../assets/contact_icon.png";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={RickLogo} alt="Rick and Morty logo to reach the HomePage" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <img src={ContactIcon} alt="Icon to reach the contact page" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;