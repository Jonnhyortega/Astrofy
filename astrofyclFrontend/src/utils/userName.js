export function getUserDataFromStorage(propDatatoGet) {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      return propDatatoGet == "name"
        ? parsedUser.name
        : propDatatoGet == "_id"
        ? parsedUser._id
        : propDatatoGet == "rol"
        ? parsedUser.rol
        : propDatatoGet == "email"
        ? parsedUser.email
        : propDatatoGet == "verified"
        ? parsedUser.verified
        : null;
    } catch (error) {
      console.error("Error al parsear el usuario del almacenamiento:", error);
      return null;
    }
  }
  return null;
}
