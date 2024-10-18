/**3. Palabras más largas que "n" letras
Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
palabras que tengan más de nletras. */
const palabras = ["manzana", "pera", "banana", "cereza", "uva"];
const n = 4;

function palabrasConMasDeNLetras(palabras, n) {
    // Filtrar las palabras que tengan más de 'n' letras
    return palabras.filter(palabra => palabra.length > n);
  }
  
  // Ejemplo de uso
  const resultado = palabrasConMasDeNLetras(palabras, n);
  console.log(resultado);
  