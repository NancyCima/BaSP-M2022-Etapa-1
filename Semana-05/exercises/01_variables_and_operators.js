console.log('Exercise 1: Variables and operators.');

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable. */

console.log('Excercise 1.a:');

var primerNumero = 15;
var segundoNumero = 60;
var suma = primerNumero + segundoNumero;
console.log('La suma de los dos numeros es:', suma);


/* b) Crear dos variables de tipo String y concatenarlas guardando  el resultado en una 3er variable. */

console.log('Excercise 1.b:');
var primerString = 'Nombre';
var segundoString = 'Apellido';
var concatenacion = primerString + ' ' + segundoString;
console.log('El resultado de la concatenacion de los strings es:', concatenacion);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('Excercise 1.c:');
var tercerString = 'Unicornio';
var cuartoString = 'Multicolor';
var largoSuma = tercerString.length + cuartoString.length;
console.log('El resultado de sumar el largo de cada variable tipo string es:', largoSuma);