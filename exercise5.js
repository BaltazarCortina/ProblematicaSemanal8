//Exercise 5: For

console.log('Exercise 5: For'.toUpperCase());


/*******************************************************************
5.a) Crear un array que contenga 5 palabras y recorrer dicho array 
utilizando un bucle for de JavaScript para mostrar una alerta 
utilizando cada una de las palabras.
********************************************************************/

var anArray = ['first', 'second', 'third', 'fourth', 'fifth'];

console.log('-Exercise 5.a)');
console.log(anArray);

for (let index = 0; index < anArray.length; index++) {
    alert(anArray[index]);
}


/*******************************************************************
5.b) Al array anterior convertir la primera letra de cada palabra 
en mayúscula y mostrar una alerta por cada palabra modificada.
********************************************************************/

console.log('-Exercise 5.b)');

for (let index = 0; index < anArray.length; index++) {
    anArray[index] = anArray[index].substring(0,1).toUpperCase() + anArray[index].substring(1);
    alert(anArray[index]);
}

console.log(anArray);


/*******************************************************************
5.c) Crear una variable llamada “sentence” que tenga un string 
vacío, luego al array del punto a) recorrerlo con un bucle for para 
ir guardando cada palabra dentro de la variable sentence. Al final 
mostrar una única alerta con la cadena completa.
********************************************************************/

var sentence = "";

for (let index = 0; index < anArray.length; index++) {
    sentence += anArray[index]
    if (index < anArray,length - 1) {
        sentence += " ";
    }
}

console.log('-Exercise 5.c)');
console.log(sentence);

alert(sentence);


/*******************************************************************
5.d) Crear una array vacío y con un bucle for de 10 repeticiones 
llenar el array con el número de la repetición, es decir que al 
final de la ejecución del bucle for deberia haber 10 elementos 
dentro del array, desde el número 0 hasta al numero 9. Mostrar por 
la consola del navegador el al array final (utilizar console.log).
********************************************************************/

var anotherArray = [];

for (let index = 0; index < 10; index++) {
    anotherArray[index] = index;
}

console.log('-Exercise 5.d)');
console.log(anotherArray);