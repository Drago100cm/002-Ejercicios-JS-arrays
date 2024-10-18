/**8. Buscar elemento
Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
en el arreglo y false si no. */
let arreglo=[1,2,3];
let valor=prompt("ingrese un valor a buscar")
function buscarElemento(arreglo,valor){
    if (arreglo.includes(valor)) {
        console.log("el valor si existe")
    } else {
        console.log("el valor no existe")
    }
}

buscarElemento(arreglo,8)