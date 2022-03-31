
//ELEMENT -> Me devuelve un HTMLCollection
//Tengo que transformarlo en Array para hacer un forEach
let imgsA = document.getElementsByClassName("a"); //las funciones getElements... devuelve una HTML colección
                                                //la función querySelector... devuelve un array

console.log(imgsA);

//No puedo recorrerlo como un array normal
//imgsA.forEach(element => console.log(element)); //esto da error, foreach is not a function

//se puede recorrer así sin problema, no da error....
 for (img of imgsA) {
      img.style.border="5px solid #00F";
 }


//También ELEMENT
//Tendría que transformarlo en Array para hacer un forEach
let imgsB = document.getElementsByClassName("b");

console.log(imgsB);

//Puedo transformarlo para recorrerlo con foreach
Array.from(imgsB).forEach( element => {
    element.style.border="5px solid black";
});

//Solo devuelve un Nodo
let imgC = document.querySelector(".c");

console.log(imgC);

imgC.style.border = "5px solid #0F0";

//Devuelve un vector de Nodos (NO LLEVA ELEMENT)
let imgsD = document.querySelectorAll(".d"); //devuelve array de nodos

console.log(imgsD);

imgsD.forEach( element => {
    element.style.border ="5px solid #F00";
});

