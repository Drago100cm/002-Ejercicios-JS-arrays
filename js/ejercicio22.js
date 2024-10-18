/**2. Eliminar falsy values
Dado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy
usando filter(). */
let arreglo=[0, "Hola", false, "", 42, null, "Mundo", undefined];

const valoresTruthy = arreglo.filter(valor => valor);

console.log(valoresTruthy);