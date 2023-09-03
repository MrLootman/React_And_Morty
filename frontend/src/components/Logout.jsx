import { useContext } from "react";
import { LuLogIn } from "react-icons/lu";
import { UserContext } from "./contexts/UserContext";

export default function Logout() {
  const { setUser } = useContext(UserContext);

  function handleClick() {
    localStorage.removeItem("token");
    setUser(undefined);  
  }
  
  return <LuLogIn className="login-logo" onClick={handleClick} />
}