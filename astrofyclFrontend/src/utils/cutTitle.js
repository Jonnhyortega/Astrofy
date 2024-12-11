export function cutThirdSpace(str) {
    const words = str.split(' '); 
    if (words.length <= 3) return str; 
  
    const thirdSpaceIndex = words.slice(0, 2).join(' ').length + 1;
  
    return str.slice(0, thirdSpaceIndex);
  }
  