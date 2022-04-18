console.log('Exercise 2: Strings.');

/* a) Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('Excercise 2.a:');

var palabra10A = 'pascualinas';
console.log(palabra10A.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Excercise 2.b:');

var palabra10B = 'Cientificas';
var nuevaPalabra10B = palabra10B.substring(0,5);
console.log(nuevaPalabra10B);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Excercise 2.c:');

var palabra10C = 'Sera un gran dia';
var caracteresASubtraer = palabra10C.length - 3;
var  ultimosTresCaracteres = palabra10C.substring(caracteresASubtraer);
console.log(ultimosTresCaracteres);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('Excercise 2.d:');

var palabra10D = 'la ROSCA de pascuas estuvo ricA.';
var nuevaPalabra10D = palabra10D.substring(0,1).toUpperCase() + palabra10D.substring(1).toLowerCase();
console.log(nuevaPalabra10D);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('Excercise 2.e:');

var palabra10E = 'Comer mandarinas al sol.';
var nuevaPalabra10E = palabra10E.indexOf(' ');
console.log(nuevaPalabra10E);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('Excercise 2.f:');

var palabra10F = 'extraterrestres invasores';
var nuevaPalabra10F = palabra10F.substring(0,1).toUpperCase() + palabra10F.substring(1,16).toLowerCase()
+ palabra10F.substring(16,17).toUpperCase() + palabra10F.substring(17).toLowerCase();
console.log(nuevaPalabra10F);