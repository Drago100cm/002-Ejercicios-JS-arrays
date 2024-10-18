/**9. Agrupar por edades
Dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce(). */

const personas = [
    { nombre: 'Ana', edad: 60 },
    { nombre: 'Carlos', edad: 33 },
    { nombre: 'Luis', edad: 47 },
    { nombre: 'Marta', edad: 22 },
    { nombre: 'Pedro', edad: 56 },
    { nombre: 'Lucía', edad: 29 }
];
  
  
  const agrupadasPorDecada = personas.reduce((grupos, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10 + 's';  // Obtiene la década
    
    if (!grupos[decada]) {
      grupos[decada] = [];  // Si no existe el grupo, lo crea
    }
  
    grupos[decada].push(persona);  // Añade la persona al grupo correspondiente
    return grupos;
  }, {});
  
  console.log(agrupadasPorDecada);
  