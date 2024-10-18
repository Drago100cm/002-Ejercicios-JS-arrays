/**5. Comprobar si un arreglo está vacío
Escribe una función que verifique si un arreglo está vacío (sin usar length directamente */
let arreglo=["Hola", "Mundo"];
i=0;

function verificarArreglo(arreglo){
    for (let palabra of arreglo){
        i++
    }
    if (i<=0){
        console.log("Es un arreglo vacio");
    } else{
        console.log("No es un arreglo vacio, contiene", i, "valores")
    }
}

verificarArreglo(arreglo);