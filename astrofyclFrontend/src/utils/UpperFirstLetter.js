export function capitalizeFirstLetter(str) {
    if (!str) return str; // Verificar que la cadena no esté vacía
    return str.charAt(0).toUpperCase() + str.slice(1);
  }