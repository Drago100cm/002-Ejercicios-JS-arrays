/**4. Reemplazar valores en un arreglo
Dado un arreglo de números, usa map() para reemplazar cada número negativo con
su valor absoluto. */

let arreglo=[-1, 0, -6, 5, -4, -67, 36];


const numerosAbsolutos = arreglo.map(numero => Math.abs(numero));

console.log(numerosAbsolutos);