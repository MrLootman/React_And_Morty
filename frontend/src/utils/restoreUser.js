export function restoreUser(setUser) {
  const token = localStorage.getItem("token");

  if (token) {
    fetch("http://localhost:5000/users/validateToken", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.valid) {
        setUser({ payload: data.user });
      } else {
        localStorage.removeItem("token");
      }
    })
    .catch(error => {
      console.error("Erreur lors de la validation du token :", error);
    });
  }
}