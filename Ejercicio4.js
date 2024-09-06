// Autor: Javier González Catalán.

//Ejercicio 4: Condicionales.

    //Dado los siguientes valores numéricos:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

console.log(`Número 1: ${numero1}, Número 2: ${numero2}, Número 3: ${numero3}\n`);

    //1. Imprimir en consola el número mayor de los tres:
if(numero1 > numero2 && numero1 > numero3) {
    console.log(`${numero1} es mayor que ${numero2} y ${numero3}`);
}else if(numero2 > numero1 && numero2 > numero3) {
    console.log(`${numero2} es mayor que ${numero1} y ${numero3}`);
}else{
    console.log(`${numero3} es mayor que ${numero1} y ${numero2}`);
}

    //2. Imprimir en consola el número menor de los tres:
if(numero1 < numero2 && numero1 < numero3) {
    console.log(`${numero1} es menor que ${numero2} y ${numero3}`);
}else if(numero2 < numero1 && numero2 < numero3) {
    console.log(`${numero2} es menor que ${numero1} y ${numero3}`);
}else{
    console.log(`${numero3} es menor que ${numero1} y ${numero2}`);
}

    //3. Imprimir en consola si el número 1 es par o impar:
if(numero1 % 2 === 0) {
    console.log(`${numero1} es par`);
}else{
    console.log(`${numero1} es impar`);
}

    //4. Imprimir en consola si el número 2 es par o impar:
if(numero2 % 2 === 0) {
    console.log(`${numero2} es par`);
}else{
    console.log(`${numero2} es impar`);
}

    //5. Imprimir en consola si el número 3 es par o impar:
if(numero3 % 2 === 0) {
    console.log(`${numero3} es par`);
}else{
    console.log(`${numero3} es impar`);
}

    //6. Imprimir en consola si el número 1 es múltiplo de 5:
if(numero1 % 5 === 0) {
    console.log(`${numero1} es múltiplo de 5`);
}else{
    console.log(`${numero1} no es múltiplo de 5`);
}

    //7. Imprimir en consola si el número 2 es múltiplo de 5:
if(numero2 % 5 === 0) {
    console.log(`${numero2} es múltiplo de 5`);
}else{
    console.log(`${numero2} no es múltiplo de 5`);
}

    //8. Imprimir en consola si el número 3 es múltiplo de 5:
if(numero3 % 5 === 0) {
    console.log(`${numero3} es múltiplo de 5`);
}else{
    console.log(`${numero3} no es múltiplo de 5`);
}