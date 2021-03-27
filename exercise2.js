//Exercise 2: Strings

console.log('Exercise 2: Strings'.toUpperCase());


/*******************************************************************
2.a) Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).
********************************************************************/

var stringA = 'This is a string';

var stringAUppercase = stringA.toUpperCase();

console.log('-Exercise 2.a)');
console.log({stringA});
console.log({stringAUppercase});


/*******************************************************************
2.b) Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando el 
resultado en una nueva variable (utilizar substring).
********************************************************************/

var stringB = 'Another string';

var stringBShorter = stringB.substring(0, 5);

console.log('-Exercise 2.b)');
console.log({stringB});
console.log({stringBShorter});
console.log("The first 5 characters of '" + stringB +"' are: '" + stringBShorter + "'.");


/*******************************************************************
2.c) Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando el 
resultado en una nueva variable (utilizar substring).
********************************************************************/

var stringC = 'A third string';

var stringCShorter = stringC.substring(stringC.length-3);

console.log('-Exercise 2.c)');
console.log({stringC});
console.log({stringCShorter});
console.log("The last 3 characters of '" + stringC +"' are: '" + stringCShorter + "'.");


/*******************************************************************
2.d) Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las 
demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).
********************************************************************/

var stringD = 'this String Has Upper and Lower Cases';

var stringDFirstUppercase = stringD.substring(0,1).toUpperCase() + stringD.substring(1).toLowerCase();

console.log('-Exercise 2.d)');
console.log({stringD});
console.log({stringDFirstUppercase});
console.log('The resulting string is:', stringDFirstUppercase);


/*******************************************************************
2.e) Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio en 
blanco y guardarla en una variable (utilizar indexOf).
********************************************************************/

var stringE = 'This string has spaces';

var firstBlankSpace = stringE.indexOf(" ");

console.log('-Exercise 2.e)');
console.log({stringE});
console.log('The first blank space is located at index:', firstBlankSpace);


/*******************************************************************
2.f) Crear una variable de tipo string con al menos 2 palabras 
largas (10 caracteres y algún espacio entre medio). Utilizar los 
métodos de los ejercicios anteriores para generar un nuevo string 
que tenga la primera letra de ambas palabras en mayúscula y las 
demás letras en minúscula (utilizar indexOf, substring, 
toUpperCase, toLowerCase y el operador +).
********************************************************************/

var stringF = 'final string';

var blankSpace = stringF.indexOf(' ') + 1;
var stringFCapitalize = '';

stringFCapitalize += stringF.substring(0,1).toUpperCase();
stringFCapitalize += stringF.substring(1,blankSpace).toLowerCase();
stringFCapitalize += stringF.substring(blankSpace, blankSpace + 1).toUpperCase();
stringFCapitalize += stringF.substring(blankSpace + 1).toLowerCase();

console.log('-Exercise 2.f)');
console.log({stringF});
console.log({stringFCapitalize});
console.log('The resulting string is:', stringFCapitalize);