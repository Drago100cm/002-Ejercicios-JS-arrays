/**Ejercicios avanzados:
 * 1. Crear un arreglo a partir de un string
Escribe una función que reciba una cadena de texto y la convierta en un arreglo de
palabras. */

let string="Este es un String que se va a convertir en arreglo";

function convertirArreglo(arreglo){
    console.log(arreglo.split(" "));
}

convertirArreglo(string);