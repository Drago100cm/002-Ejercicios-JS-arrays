/**4. Invertir un arreglo
Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()). */
function numeros(number){
    let respuesta = [];
    number = String(number);
  
    for(let i = number.length -1 ; i>=0; i--){        
      respuesta.push(number[i]);
    }
    return respuesta;
  }
  
  console.log(numeros(123))