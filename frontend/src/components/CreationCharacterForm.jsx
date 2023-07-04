import { useState, useRef } from "react";
import ImageUploadInput from "./ImageUploadInput";

function CreationCharacterForm({ handleChange, formData, handleSubmit }) {
  const [isAgree, setIsAgree] = useState(null);
  
  // On génère ici la référence dans le DOM, initialisée à null avant d'être reliée
  const fileInputRef = useRef(null);

  // Ce booléen permet de changer l'état de la variable isAgree, et ainsi d'agir sur l'affichage conditionnels des éléments du return.
  function handleChangeBoolean(e) {
    if (e.target.name === "checkbox-no") {
      setIsAgree(false);
    } else if (e.target.name === "checkbox-yes") {
      setIsAgree(true);
    }
  }

  // Cette fonction permet d'effectuer un clic sur le bouton relié à l'input de type file.
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <form className="creation-character_form">
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="status"
        placeholder="status"
        onChange={handleChange}
        value={formData.status}
      />
      <input
        name="gender"
        placeholder="gender"
        onChange={handleChange}
        value={formData.gender}
      />
      <input
        name="species"
        placeholder="species"
        onChange={handleChange}
        value={formData.species}
      />
      {isAgree === null &&
        <ImageUploadInput
          handleChangeBoolean={handleChangeBoolean}
        />
      }
      {
        isAgree === false &&
        <input
          name="image"
          placeholder="image"
          onChange={handleChange}
          value={formData.image}
        />
      }
      {
        isAgree === true &&
        <>
          <input
            ref={fileInputRef}
            name="image"
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <button type="button" onClick={handleButtonClick}>
            Select Image
          </button>
          {!formData.image ?
            <span>...</span>
            :
            <span>{formData.image}</span>  
          }
        </>
      }
      <button
        className="creation-character_form_submit_button"
        type="submit"
        onClick={handleSubmit}
      >Submit
      </button>
    </form>
  )
}

export default CreationCharacterForm;