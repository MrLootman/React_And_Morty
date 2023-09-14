import { NavLink } from "react-router-dom";

function RickAndMortyCard({ name, image, id }) {
    return (
        <li className="rick-and-morty-card">
            <NavLink to={`/character/${id}`}>
                <img src={image} alt={`This image is a character named ${name} from Rick and Morty cartoon`}/>
                <h2>{name}</h2>
            </NavLink>
        </li>
    )
}

export default RickAndMortyCard;