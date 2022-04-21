/*
Escribe un script que imprima un mensaje con la fecha de hoy con el siguiente formato.

Hola, hoy es 22 de Abril de 2020
*/

const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];;
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

const message = "Hola, hoy es " + day + " de " + months[month] + " del " + year;

console.log(message);