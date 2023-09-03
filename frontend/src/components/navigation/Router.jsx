import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import { useContext, useEffect } from "react";
import { restoreUser } from "../../utils/restoreUser";
import { UserContext } from "../contexts/UserContext";

function Router() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    restoreUser(setUser);
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>}
      />
      {user?.payload.isAdmin &&
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminPage />
            </ProtectedRoutes>}
        />
      }
      <Route
        path="character/:id"
        element={
          <ProtectedRoutes>
            <RickAndMortyDetails />
          </ProtectedRoutes>}
      />

    </Routes>
  )
}

export default Router;