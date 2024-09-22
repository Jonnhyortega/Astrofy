
export const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') {
    console.error('Expected a string but received:', text);
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

  
  export  const translations = {
    electronics: 'Electrónica',
    'men\'s clothing': 'Ropa de hombre',
    'women\'s clothing': 'Ropa de mujer',
    jewelery: 'Joyería',
  };
  
 export const translateCategory = (category) => {
    return translations[category.toLowerCase()] || capitalizeFirstLetter(category);
  };
  