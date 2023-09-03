function ImageUploadInput({ handleChangeBoolean }) {
  return (
    <ul className="creation-character_form_checkboxes">
      <p>Voulez-vous télécharger une image ?</p>
      <li>
        <label htmlFor="checkbox_yes">Oui</label>
        <input
          id="checkbox_yes"
          name="checkbox-yes"
          type="checkbox"
          onClick={handleChangeBoolean}
        />
      </li>
      <li>
        <label htmlFor="checkbox-no">Non</label>
        <input
          id="checkbox_no"
          type="checkbox"
          name="checkbox-no"
          onClick={handleChangeBoolean}
        />
      </li>
    </ul >
  )
}

export default ImageUploadInput;