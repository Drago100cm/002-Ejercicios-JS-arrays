/**8. Algunos números son pares
Dado un arreglo de números, usa some() para verificar si al menos uno es par. */
let arreglo = [1, 2, 3, 4, 5];

function algunosPares(arreglo) {
    return arreglo.some((elemento) => elemento % 2 === 0);
}

console.log(algunosPares(arreglo));