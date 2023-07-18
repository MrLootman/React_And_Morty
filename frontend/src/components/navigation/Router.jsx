import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
        </Routes>
    )
}

export default Router;