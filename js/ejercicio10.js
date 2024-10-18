/**10. Multiplicar por 2
Crea una función que multiplique cada número de un arreglo por 2 usando map(). */

const Numeros = [1, 2, 3, 4, 5];

function multiplicarPorDos(numeros) {
    // Usar el método map para multiplicar cada número por 2
    return numeros.map(function(num) {
        return num * 2;
    });
}
console.log("El array original es:   "+ Numeros)
const numerosMultiplicados = multiplicarPorDos(Numeros);
console.log("Números multiplicados por 2:" + numerosMultiplicados);
