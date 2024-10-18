/**2. Encuentra el mayor número
Escribe una función que encuentre el número más grande en un arreglo de
números. */

const Arrays=[90,2,9];
const may=Arrays.reduce((actual,anterior) => {
    const sumas=Math.max(actual,anterior);
    return sumas
},0);
console.log(may);

