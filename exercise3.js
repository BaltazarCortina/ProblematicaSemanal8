//Exercise 3: Arrays

console.log('Exercise 3: Arrays'.toUpperCase());


/*******************************************************************
3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
(utilizar console.log)
********************************************************************/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('-Exercise 3.a)');
console.log('The 5th month is:', months[4]);
console.log('The 11th month is:', months[10]);


/*******************************************************************
3.b) Ordenar el array de meses alfabéticamente y mostrarlo por 
consola (utilizar sort).
********************************************************************/

months.sort()

console.log('-Exercise 3.b)');
console.log(months);


/*******************************************************************
3.c) Agregar un elemento al principio y al final del array 
(utilizar unshift y push).
********************************************************************/

months.unshift('First month');
months.push('Last month');

console.log('-Exercise 3.c)');
console.log(months);


/*******************************************************************
3.d ) Quitar un elemento del principio y del final del array 
(utilizar shift y pop).
********************************************************************/

months.shift();
months.pop();

console.log('-Exercise 3.d)');
console.log(months);


/*******************************************************************
3.e ) Invertir el orden del array (utilizar reverse)
********************************************************************/

months.reverse();

console.log('-Exercise 3.e)');
console.log(months);


/*******************************************************************
3.f ) Unir todos los elementos del array en un único string donde 
cada mes este separado por un guión - (utilizar join).
********************************************************************/

var everyMonth = months.join(' - ');

console.log('-Exercise 3.f)');
console.log(everyMonth);


/*******************************************************************
3.g ) Crear una copia del array de meses que contenga desde Mayo 
hasta Noviembre (utilizar slice).
********************************************************************/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var sliceOfMonths = months.slice(months.indexOf('Mayo'), months.indexOf('Noviembre') + 1);

console.log('-Exercise 3.g)');
console.log(sliceOfMonths);