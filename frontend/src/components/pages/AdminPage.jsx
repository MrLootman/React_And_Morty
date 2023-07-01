import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreationCharacterForm from "../creationCharacterForm";

function AdminPage() {
    const [isDataSended, setIsDataSended] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        gender: "",
        species: "",
        image: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((previousValue) => ({
            ...previousValue, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/characters", {
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(() => {
                setIsDataSended(true);

                setTimeout(() => {
                    navigate("/")
                }, 4000)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <ul className="admin-page">
            {!isDataSended &&
                <>
                    <li className="admin-page_title">
                        <h2>Créez votre personnage</h2>
                    </li>
                    <li className="admin-page_form">
                        <CreationCharacterForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            formData={formData}
                        />
                    </li>
                </>
            }
            {isDataSended &&
                <li className="admin-page_message_success">
                    <div className="progress-bar"></div>
                    <p>Personnage créé !</p>
                </li>
            }
        </ul >
    )
}

export default AdminPage;



















