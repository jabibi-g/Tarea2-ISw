// Autor: Javier González Catalán.

// Ejercicio 5: Ciclos.

    //1. Imprimir en consola los números del 1 al 10.
console.log("Números del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n");

    //2. Imprimir en consola los números del 10 al 1.
console.log("Números del 10 al 1: ");
for(let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("\n");

    //3. Imprimir en consola los números 1 al 10 pero sólo los pares.
console.log("Números pares del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
console.log("\n");

    //4. Imprimir en consola los números 1 al 10 pero sólo los impares.
console.log("Números impares del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
console.log("\n");

    //5. Imprimir en consola los números 1 al 10 pero sólo los múltiplos de 3.
console.log("Múltiplos de 3 del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}
console.log("\n");

    //6. Imprimir en consola los números 1 al 10 pero sólo los múltiplos de 5.
console.log("Múltiplos de 5 del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    if(i % 5 === 0) {
        console.log(i);
    }
}
console.log("\n");

    //7. Imprimir en consola los números 1 al 10 pero sólo los múltiplos de 3 y 5.
console.log("Múltiplos de 3 y 5 del 1 al 10: ");
let count = 0;
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }else{
        count++;
    }
}
if(count === 10){
    console.log("No hay múltiplos de 3 y 5 al del 1 al 10.");
}
console.log("\n");

    //8. Imprimir en consola los números 1 al 10 pero sólo los múltiplos de 3 ó 5.
console.log("Múltiplos de 3 o 5 del 1 al 10: ");
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
console.log("\n");
