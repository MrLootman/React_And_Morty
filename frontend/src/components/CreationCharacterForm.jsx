function CreationCharacterForm({ handleChange, formData, handleSubmit }) {
  return (
    <form>
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
      <input
        name="image"
        placeholder="image"
        onChange={handleChange}
        value={formData.image}
      />
      <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
  )
}

export default CreationCharacterForm;