function ImageUploadInput({ handleChangeBoolean }) {
  return (
    <ul className="creation-character_form_checkboxes">
      <p>Voulez-vous télécharger une image ?</p>
      <li>
        <label>Oui</label>
        <input
          type="checkbox"
          name="checkbox-yes"
          onClick={handleChangeBoolean}
        />
      </li>
      <li>
        <label>Non</label>
        <input
          type="checkbox"
          name="checkbox-no"
          onClick={handleChangeBoolean}
        />
      </li>
    </ul >
  )
}

export default ImageUploadInput;