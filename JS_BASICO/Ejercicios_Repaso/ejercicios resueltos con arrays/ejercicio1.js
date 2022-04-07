/**
 * 
 * Muestra los números pares del siguiente array
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 */


 var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 for (var i = 0; i < numeros.length; i += 1) {
     if (numeros[i] % 2 === 0) {
         console.log('El numero ' + numeros[i] + " es par.")
     }
 }