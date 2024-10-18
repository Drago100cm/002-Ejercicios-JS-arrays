/**9. Filtrar números pares
Dado un arreglo de números, retorna solo los números pares usando filter(). */

const arrayNumeros1 = [1, 2, 3, 4, 5, 6];

function filtrarNumerosPares(numeros) {
    
    return numeros.filter(function(num) {// Usar el método filter para devolver solo los números pares
        return num % 2 === 0;
    });
}

const numerosPares1 = filtrarNumerosPares(arrayNumeros1);
console.log("Números pares de    " + arrayNumeros1 +"  son  "  + numerosPares1); // Salida: [2, 4, 6]