import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProtectedRoutes({ children }) {
  const { user, setUser } = useContext(UserContext);

  console.log("Quel est le type de user", typeof user);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        setUser({ name: "Nico", email: "nico@gmail.com" })
      } else {
        setUser(null);
      }
    }, 2000)
  }, [])

  if (user === undefined) {
    return null
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return children;
}