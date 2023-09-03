import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoutes({ children }) {
  const [isTokenExists, setIsTokenExists] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        setIsTokenExists(true);
      } else {
        setIsTokenExists(false);
      }
    }, 500)
  }, []);

  if (isTokenExists === null) return null;

  if (!isTokenExists) return <Navigate to="/login" />

  return children;
}