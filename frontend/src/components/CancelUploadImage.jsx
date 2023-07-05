export default function CancelUploadImage({ setIsAgree }) {
  return (
    <div>
      <p style={{ textAlign: "center", marginBlock: "10vh", fontSize: "40px" }}>Pas d'images, pas de personnage !</p>
      <button 
        style={{ marginLeft: "20%" }}
        type="button"
        aria-label="cancel button" 
        onClick={() => setIsAgree(null)}>
          Retournez à la page précédente
      </button>
    </div>
  );
}