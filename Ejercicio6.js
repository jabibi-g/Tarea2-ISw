// Autor: Javier González Catalán.

//Ejercicio 6: Funciones.

    //1. Crear una función que reciba un string y lo retorne en mayúsculas.
function mayusculas(str){
    return str.toUpperCase();
}
const strMin = "hola mundo";

console.log("Uso de la función mayusculas del string hola mundo: ", mayusculas(strMin));

    //2. Crear una función que reciba un string y lo retorne en minúsculas.
function minusculas(str){
    return str.toLowerCase();
}
const strMay = "HOLA MUNDO";

console.log("Uso de la función minusculas del string HOLA MUNDO: ", minusculas(strMay));

    //3. Crear una función que reciba como parámetros dos números y los reste.

function restar(a, b) {
    return a - b;
}
let num1 = 10;
let num2 = 5;

console.log(`Resta de ${num1} - ${num2}: `, restar(num1, num2));

    //4. Crear una función que reciba como parámetros dos números y los divida.
function dividir(a, b) {
    return a / b;
}

console.log(`División de ${num1} / ${num2}: `, dividir(num1, num2));

    //5. Crear una función que reciba como parámetros dos números y los multiplique.
function multiplicar(a, b) {
    return a * b;
}

console.log(`Multiplicación de ${num1} * ${num2}: `, multiplicar(num1, num2));

    //6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(str) {
    return str.length;
}

console.log(`Longitud del string "Hola mundo": `, longitud("Hola mundo"));
