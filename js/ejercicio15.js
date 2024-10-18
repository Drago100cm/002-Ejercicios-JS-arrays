/**5. Buscar el índice de un elemento
Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en
el arreglo (o -1 si no existe). */
const numeros = [10, 20, 30, 40, 50];
const indice1 = encontrarIndice(numeros, 30);

function encontrarIndice(arreglo, valor) {  
    for (let i = 0; i < arreglo.length; i++) {// Iterar a través del arreglo para encontrar el valor
        if (arreglo[i] === valor) {
            return i; // Devolver el índice si se encuentra el valor
        }
    }

    return -1; // Devolver -1 si el valor no se encuentra
}

console.log("Índice de 30: ",indice1); 