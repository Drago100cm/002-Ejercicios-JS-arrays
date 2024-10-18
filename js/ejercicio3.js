/**3. Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números. */
const lista=[10,10,10,10,10,9];
const can=lista.length;
const may=lista.reduce((actual,anterior) => {

    const sumas=(actual+anterior);

    return sumas
},0);
const pro=may/can;

console.log(pro);