import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanel from "../admin/AdminPanel";
import AdminCreation from "../admin/AdminCreation";

function AdminPage() {
    const navigate = useNavigate();
    const [isDataSended, setIsDataSended] = useState(false);
    const [selectedPath, setSelectedPath] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        gender: "",
        species: "",
        image: ""
    });

    const handleSelection = (item) => {
        setSelectedPath(item)
    }

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setFormData((previousValue) => ({
                ...previousValue, [name]: `http://localhost:5000/uploads/${files[0].name}`
            }))
            setSelectedFile(files[0])
        } else {
            setFormData((previousValue) => ({
                ...previousValue, [name]: value
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
                'Content-Type': "application/json",
                'X-CSRF-Token': req.session.csrfToken
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

    if (isDataSended) return (
        <>
            <AdminPanel />
            <li className="admin-page_message_success">
                <div className="progress-bar"></div>
                <p>Personnage créé !</p>
            </li>
        </>
    );

    if (selectedPath === "add") {
        return (
            <AdminCreation
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        )
    }

    if (!isDataSended) return (
        <>
            <AdminPanel
                handleSelection={handleSelection}
            />
        </>
    )
}

export default AdminPage;