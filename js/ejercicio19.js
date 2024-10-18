/**9. Suma acumulada
Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los
elementos. */
let arreglo = [1, 2, 3, 4, 5];

function sumaAcumulada(arreglo) {
    return arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

console.log(sumaAcumulada(arreglo));