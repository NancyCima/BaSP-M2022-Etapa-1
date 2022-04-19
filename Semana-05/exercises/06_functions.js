console.log('Exercise 6: Functions');

/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar 
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercise 6.a:');

function sumaA(a, b) {
    return a + b;
}

var resultadoSumaA = sumaA(15, 25);
console.log(resultadoSumaA);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('Exercise 6.b:');

function sumaB(a, b) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        return a + b;
    } else {
        alert('Error!: One of the variables is not a number');
        return NaN;
    }
}
var resultadoB = sumaB(15, 'hola');
console.log(resultadoB); 

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/ 

console.log('Exercise 6.c:');

function validateInteger(x) {
    if (x == Math.round(x)) {
        return true;
    } else {
        return false;
    }
}

var integerNumber = validateInteger(55.5);
console.log(integerNumber);

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log ('Exercise 6 .d:');

function sumaC(a, b) {
     if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return a + b;
        } else {
            if (validateInteger(a) == false) {
                alert("ERROR! The variable " + a + " is not an integer");
                return Math.round(a)
            } else {
                alert("ERROR! The variable " + b + " is not an integer");
                return Math.round(b)
            }
        } 
    } else {
        alert("ERROR! One of the variables is not a number");
        return NaN;
    }
} 

var resultadoC = sumaC(20.84, 25);
console.log(resultadoC);

/* e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
probando que todo siga funcionando igual.*/

console.log ('Exercise 6.e: ');

function sumaValidator(a,b) {
    if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return a + b;
        } else {
            if (validateInteger(a) == false) {
                alert("ERROR! The variable " + a + " is not an integer");
                return Math.round(a)
            } else {
                alert("ERROR! The variable " + b + " is not an integer");
                return Math.round(b)
            }
        } 
    } else {
        alert("ERROR! One of the variables is not a number");
        return NaN;
    }
} 
 
function sumaE(a,b) {
    var sum = sumaValidator(a,b);
    if (sum == true) {
        return a + b;
    } else return sum;
}

var resultadoE = sumaE(504,2500);
console.log(resultadoE);