import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { validatorSchema } from "../../utils/validator";

function RegistrationPage() {
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    function handleSubmit(e) {
        const id = toast.loading("Please wait...")

        e.preventDefault();

        const { error, value } = validatorSchema.validate(postData);

        if (error) {
            toast.update(id, { render: `${error} 🧐`, type: "error", isLoading: false, hideProgressBar: false, autoClose: 5000 })
            return;
        }

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        })
            .then((response) => {
                if (response.status === 403) {
                    toast.update(id, { render: "Impossible to register 🧐", type: "error", isLoading: false, hideProgressBar: false, autoClose: 5000 })
                } else {
                    toast.update(id, { render: "Everything is OK 😃 !", type: "success", isLoading: false, hideProgressBar: false, autoClose: 5000 })

                    setPostData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: ""
                    })

                    setTimeout(() => {
                        navigate("/login");
                    }, 5000)
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    function handleChange(e) {
        setPostData((previousValue) => ({
            ...previousValue, [e.target.name]: e.target.value
        }))
    }

    return (
        <ul className="registration_page">
            <ToastContainer />
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