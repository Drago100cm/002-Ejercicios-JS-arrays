/**7. Eliminar duplicados
Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
duplicados). */
let arreglo = [1, 2, 3, 4, 5, 2, 3, 4];
let mtSinRepetidos = new Set(arreglo);
let arregloSinRepetir = Array.from(mtSinRepetidos);

console.log(arregloSinRepetir);