// Autor Javier González Catalán

// Ejercicio 7: Arrays.

    //1. Crear una función que reciba como parámetro un array de números y retorne la suma de todos los elementos.
function sumaElementos(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

const arrNum = [1, 2, 3, 4, 5];
console.log("Suma de los elementos del array [1, 2, 3, 4, 5]: ", sumaElementos(arrNum));

    /*2. Crear una función (o varias) que reciba como parámento un array de números y retorne el promedio de todos
    los números del array.*/
function promedioElementos(arr){
    let suma = sumaElementos(arr);
    return suma / arr.length;
}

console.log("Promedio de los elementos del array [1, 2, 3, 4, 5]: ", promedioElementos(arrNum));

    /*3. Crear una función que tome un arreglo de strings y devuelva un nuevo arreglo que contenga los mismos strings
    per con todas las letras mayúsculas.*/

function mayusculasArray(arr){
    let arrMayus = [];
    for(let i = 0; i < arr.length; i++) {
        arrMayus.push(arr[i].toUpperCase());
    }
    return arrMayus;
}

const strArr = ["hola", "mundo", "isw"];
console.log("Array de strings: ", strArr, ", Array de strings en mayúsculas: ", mayusculasArray(strArr));

    /*4. Crear una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con todos los
    números pares.*/
function numerosPares(arr){
    let arrPares = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arrPares.push(arr[i]);
        }
    }
    return arrPares;
}

const arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array de números: ", arrNum2, ", de ellos los números pares serían: ", numerosPares(arrNum2));
