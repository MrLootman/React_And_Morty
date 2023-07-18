function RegistrationPage() {
    return (
        <ul className="registration_page">
            <li>
                <form>
                    <input type="text" placeholder="Prénom" />
                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Envoyer</button>
                </form>
            </li>
            <li>
                <img src="https://i.pinimg.com/474x/ae/5b/2d/ae5b2d4237e5c269f4b33f633c03f5fb--rick-and-morty.jpg" alt="Rick Sanchez" />
            </li>
        </ul>
    )
}

export default RegistrationPage;