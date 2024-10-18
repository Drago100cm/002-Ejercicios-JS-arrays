/**Ejercicios avanzados:
2. Ordenar números
Dado un arreglo de números, ordénalo de menor a mayor. */
const arreglo1 = [5, 3, 8, 1, 2];
function ordenarNumeros(numeros) {
    return numeros.slice().sort((a, b) => a - b);// Ordenar el arreglo usando el método sort incorporado
}


//Ordenar un arreglo simple de números

const arregloOrdenado1 = ordenarNumeros(arreglo1);
console.log("el arreglo original es:  ",arreglo1);
console.log("Arreglo ordenado:  ",arregloOrdenado1);

