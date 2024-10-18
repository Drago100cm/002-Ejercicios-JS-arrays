/**4. Unir en una cadena
Dado un arreglo de palabras, únelas en una sola cadena separada por comas. */


function unirPalabras(palabras) {
    // Unir el arreglo en una sola cadena separada por comas
    return palabras.join(', ');
  }
  
  // Ejemplo de uso
  const palabras = ["manzana", "pera", "banana", "cereza", "uva"];
  const resultado = unirPalabras(palabras);
  console.log(resultado);
  