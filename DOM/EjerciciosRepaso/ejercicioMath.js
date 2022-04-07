/*
Escribe una función que reciba un número por parámetro y devuelva otro número aleatorio
entre cero y el número del parametro.

Ejemplo:

calcularAleatorio(10) // Devuelve un número aleatorio entre cero y 10.
*/


function calcularAleatorio(numero) {
    return Math.round(Math.random() * numero);
}


console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));