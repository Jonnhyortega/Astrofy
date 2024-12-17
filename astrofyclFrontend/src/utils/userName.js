export function getUserNameFromStorage() {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user); 
        return parsedUser.name; 
      } catch (error) {
        console.error("Error al parsear el usuario del almacenamiento:", error);
        return null;
      }
    }
    return null; 
  }
