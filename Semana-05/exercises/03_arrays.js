console.log('Exercise 3: Arrays.');

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('Excercise 3.a:');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses[4], meses[10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('Excercise 3.b:');

var mesesB = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesesB.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('Excercise 3.c:');

var mesesC = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
mesesC.unshift('Principio de Año');
mesesC.push('Fin de Año');
console.log(mesesC);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('Excercise 3.d:');

var mesesD = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
mesesD.shift();
mesesD.pop();
console.log(mesesD);

/* e) Invertir el orden del array (utilizar reverse). */

console.log('Excercise 3.e:');

var mesesE = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesesE.reverse());

/* f) Unir todos los elementos del array en un único string donde cada
mes este separado por un guión - (utilizar join). */

console.log('Excercise 3.f:');

var mesesF = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesesF.join(' - '));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('Excercise 3.g:');

var mesesG = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesesG.slice(4,11));