/**7. Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n. */
let arreglo = [1, 2, 3, 4, 5];

function todosMayoresQueN(arreglo, n) {
    return arreglo.every((elemento) => elemento > n);
}

console.log(todosMayoresQueN(arreglo, 3));