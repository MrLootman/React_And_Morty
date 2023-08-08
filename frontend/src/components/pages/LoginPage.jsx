import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [postData, setPostData] = useState({
    email: "",
    password: ""
  })

  async function handleSubmit(e) {
    e.preventDefault();

    if (!postData.email || !postData.password) {
      console.log("No way")
    }

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:5000/users/login/", {
      signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(({ token }) => {
        localStorage.setItem("token", token);
        setUser(token);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    console.log("Mon user", user)
    if (user !== undefined) {
      navigate("/");
    }
  }, [user]);

  function handleChange(e) {
    setPostData((previousValue) => ({
      ...previousValue, [e.target.name]: e.target.value
    }))
  }


  return (
    <ul className="login_page">
      <li>
        <img src="data:image/png;base64,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" />
      </li>

      <li>
        <form onSubmit={handleSubmit}>
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
          <div className="recognition-area">
            <input type="checkbox" />
            <label htmlFor="recognize">Remember me ?</label>
          </div>
          <button type="submit">Envoyer</button>
        </form>

        <p>
          Vous n'avez pas compte ?
          <NavLink to={"/register"}>
            <span>
              {" "}Inscrivez-vous !
            </span>
          </NavLink>
        </p>
      </li>
    </ul>
  )
}

export default LoginPage;