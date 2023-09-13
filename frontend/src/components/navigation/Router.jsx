import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharacterPage from "../pages/CharacterPage";
import ContactPage from "../pages/ContactPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default Router;