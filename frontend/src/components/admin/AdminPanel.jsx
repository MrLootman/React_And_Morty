import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function AdminPanel({ handleSelection }) {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <ul className={`admin_panel ${showPanel ? "show" : ""}`}>
      <li onClick={() => handleSelection("add")}>
        <p>Ajoutez un personnage</p>
      </li>
      <li>
        <NavLink>
          <p>Supprimez un personnage</p>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <p>Modifiez un personnage</p>
        </NavLink>
      </li>
      <li onClick={togglePanel}>
        <BsArrowRightCircle />
      </li>
    </ul>
  )
};