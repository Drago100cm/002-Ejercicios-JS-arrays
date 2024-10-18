/**
6. Combina varios arreglos y ordena
Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor. */


function combinar(...arrays) {
    // Combine all input arrays into a single array
    const combinarArreglo = [].concat(...arrays);
    
    // Sort the combined array in ascending order
    combinarArreglo.sort((a, b) => a - b);
    
    return combinarArreglo;
}

// Example Usage
const array1 = [10, 2, 9];
const array2 = [1, 4, 6];
const array3 = [3, 8, 7];

const combinadosArreglados = combinar(array1, array2, array3);
console.log(combinadosArreglados);