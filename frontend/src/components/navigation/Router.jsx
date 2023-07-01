import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";
import AdminPage from "../pages/AdminPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />
        </Routes>
    )
}

export default Router;