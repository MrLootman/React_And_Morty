import CreationCharacterForm from "../CreationCharacterForm";

export default function AdminCreation({ handleChange, handleSubmit, formData }) {
  return (
    <ul className="admin-page">
      <li className="admin-page_title">
        <h2>Créez votre personnage</h2>
      </li>
      <li className="admin-page_form">
        <CreationCharacterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </li>
    </ul>
  )
}