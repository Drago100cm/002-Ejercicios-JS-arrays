/**7. Contar ocurrencias de un valor
Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce(). */
function frecuencia(arreglo, valor) {
    return arreglo.reduce((conteo, valorActual) => {
        return valorActual === valor ? conteo + 1 : conteo;
    }, 0);
}

const numeros = [1, 2, 3, 1, 4, 1, 5];
let nuli=parseFloat(prompt("ingrese el numero"));
const conteoDeUnos = frecuencia(numeros, nuli);
console.log("El número:  "+ nuli + "  aparece:  " + conteoDeUnos + "   veces en el arreglo.");
