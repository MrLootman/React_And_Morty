import { useState } from "react";

function RegistrationPage() {
    const [postData, setPostData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    function handleSubmit(e) {
        e.preventDefault();

        if (!postData.firstname) {
            console.log("No way")
            return;
        }

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        })
        .then(() => console.log("Envoi réussi"))
        .catch(err => console.error(err));
    }

    function handleChange(e) {
        setPostData((previousValue) => ({
            ...previousValue, [e.target.name]: e.target.value
        }))
    }

    return (
        <ul className="registration_page">
            <li>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Prénom"
                        name="firstname"
                        value={postData.firstname}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Nom"
                        name="lastname"
                        value={postData.lastname}
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        name="email"
                        value={postData.email}
                        onChange={handleChange}  
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={postData.password}
                        onChange={handleChange} 
                    />
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