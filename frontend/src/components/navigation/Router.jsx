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

            <Route path="/admin" element={<ProtectedRoutes element={<AdminPage />} />} />
            <Route path="/character/:id" element={<ProtectedRoutes element={<RickAndMortyDetails />} />} />
            <Route path="/" element={<ProtectedRoutes element={<HomePage />} />} />
        </Routes>
    )
}

export default Router;