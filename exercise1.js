//Exercise 1: Variables and operations

console.log('Exercise 1: Variables and operations'.toUpperCase());


/*******************************************************************
1.a) Crear dos variables numéricas y utilizar el operador suma para 
guardar el valor de la suma de ambos números en una 3er variable.
********************************************************************/

var number1, number2, sum;
number1 = 56;
number2 = 23;

sum = number1 + number2;

console.log('-Exercise 1.a)');
console.log({number1, number2});
console.log('The sum of', number1, '+', number2, 'is', sum);


/*******************************************************************
1.b) Crear dos variables de tipo String y concatenarlas guardando 
el resultado en una 3er variable.
********************************************************************/

var string1, string2, sumOfStrings;
string1 = 'First string';
string2 = 'Second string';

sumOfStrings = string1 + ' ' + string2; //Added a space to separate the two strings

console.log('-Exercise 1.b)');
console.log({string1, string2});
console.log("If you concatenate '" + string1 + "' and '" + string2 + "' you get: '" + sumOfStrings + "'");


/*******************************************************************
1.c) Crear dos variables de tipo String y sumar el largo de cada 
variable (cantidad de letras del string) guardando el resultado 
la suma una 3er variable (utilizar length).
********************************************************************/

var string3, string4, length;
string3 = 'This is the first string.';
string4 = 'This is the second string.';

length = string3.length + string4.length;

console.log('-Exercise 1.c)');
console.log("The first string is: '" + string3 + "'. It's length is", string3.length);
console.log("The second string is: '" + string4 + "'. It's length is", string4.length);
console.log('The sum of the lengths of the two strings is', length);