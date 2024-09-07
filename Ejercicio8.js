// Autor: Javier González Catalán.

// Ejercicio 8: Objetos.

    /* 1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad
    y género. Luego, muestra información de esa por la consola. */
const persona = {
    nombre: "Javier",
    edad: 22,
    genero: "Masculino"
};

console.log(persona);
console.log("Nombre de la persona: ", persona.nombre);
console.log("Edad de la persona: ", persona.edad);
console.log("Género de la persona: ", persona.genero);

    /* 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías e indica el estado
    si está en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo
    de dato que es.*/
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 20,
    estado: "Buen estado"
};

console.log("\n",caja);
console.log("Cuadernos: ", caja.cuadernos);
console.log("Lapices: ", caja.lapices);
console.log("Papel: ", caja.papel);
console.log("Fotografías: ", caja.fotografias);
console.log("Estado: ", caja.estado);
console.log("\nTipo de dato de cuadernos: ", typeof(caja.cuadernos));
console.log("Tipo de dato de lapices: ", typeof(caja.lapices));
console.log("Tipo de dato de papel: ", typeof(caja.papel));
console.log("Tipo de dato de fotografías: ", typeof(caja.fotografias));
console.log("Tipo de dato de estado: ", typeof(caja.estado));