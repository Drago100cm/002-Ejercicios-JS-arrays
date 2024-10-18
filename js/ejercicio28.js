/**8. Transforma un arreglo de objetos
Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres. */
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 33 },
    { nombre: 'Luis', edad: 47 }
  ];
  
  // Crear un nuevo arreglo que contenga solo los nombres
  const nombres = personas.map(persona => persona.nombre);
  
  console.log(nombres);  