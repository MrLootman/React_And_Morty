import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

function Router() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />

            <Route
                path="/admin"
                element={
                    <ProtectedRoutes>
                        <AdminPage />
                    </ProtectedRoutes>}
            />
            <Route
                path="character/:id"
                element={
                    <ProtectedRoutes>
                        <RickAndMortyDetails />
                    </ProtectedRoutes>}
            />
            <Route
                path="/"
                element={
                    <ProtectedRoutes>
                        <HomePage />
                    </ProtectedRoutes>}
            />
        </Routes>
    )
}

export default Router;