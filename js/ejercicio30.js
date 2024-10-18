/**10. Combinar objetos de dos arreglos
Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos. */
const nombres = ['Ana', 'Carlos', 'Luis'];//declaramos el rpimer rreglo
const edades = [25, 33, 47];//declaramos el segundo arreglo
const combinados = nombres.map((nombre, indice) => {// Combinar los dos arreglos
  return { nombre: nombre, edad: edades[indice] };  // Combina los valores de ambos arreglos en un objeto
});

console.log(combinados);
