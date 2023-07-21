import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ element: Component }) {
  let isAuthenticated = null;

  if (!isAuthenticated) return <Navigate to="/login" />

  return (
    <Component />
  )
}