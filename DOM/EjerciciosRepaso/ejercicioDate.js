/*
Escribe un script que imprima un mensaje con la fecha de hoy con el siguiente formato.

Hola, hoy es 22 de Abril de 2020
*/

var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];;
var today = new Date();

var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

var message = "Hola, hoy es " + day + " de " + months[month] + " del " + year;

console.log(message);