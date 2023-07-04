import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreationCharacterForm from "../CreationCharacterForm";

function AdminPage() {
    const [isDataSended, setIsDataSended] = useState(false);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        gender: "",
        species: "",
        image: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFormData((previousValue) => ({
                ...previousValue, [e.target.name]: `http://localhost:5000/uploads/${e.target.files[0].name}`
            }))
            setSelectedFile(e.target.files[0])
        } else {
            setFormData((previousValue) => ({
                ...previousValue, [e.target.name]: e.target.value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()

        if (selectedFile) {
            data.append("image", selectedFile)

            fetch("http://localhost:5000/upload", {
                headers: {
                    Accept: 'multipart/form-data',
                },
                method: "POST",
                body: data
            })
                .catch((err) => {
                    console.error(err)
                })
        }

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