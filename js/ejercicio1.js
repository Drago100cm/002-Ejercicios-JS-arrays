/**Ejercicios básicos:
Ejercicios intermedios:
Actividad Ejercicios Arrays
Methods.
1. Suma de los elementos de un arreglo
Escribe una función que reciba un arreglo de números y retorne la suma de todos
sus elementos. */
const Arrays=[1,2,3];
const suma=Arrays.reduce((actual,anterior) => {//usamos el metodo reduce que permite tomar los valores del array y aplicarles una funcion
    const sumas=actual+anterior;//declaramos la funcion
    return sumas
},0);
console.log(suma);