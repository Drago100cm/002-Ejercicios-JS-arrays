/**6. Encontrar un elemento específico
Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
específica usando find(). */
let arreglo = [1, 2, 3, 4, 5];

function encontrarElementoEspecifico(arreglo, elemento) {
    return arreglo.find((elementoActual) => elementoActual === elemento);
}

console.log(encontrarElementoEspecifico(arreglo, 3));