
//Obtención de un único elemento
const special = document.getElementById("special");
console.log(special);

special.style.color = "red";
special.style.background = "green";

// ------------------
//No obtenemos ningún elemento
 let element = document.getElementById("another");
 console.log(element);

 // primera forma. más elegante
 if (!element) alert("No hay ningún elemento con el ID another");
 
 // segunda forma
 if (element == null) alert("No hay ningún elemento con el ID another");

// ------------------


//Obtenemos varios elementos
const list_elements = document.querySelectorAll("li");
//console.log("list_elements:"+list_elements); //show code actions...
console.log(`list_elements:${list_elements}`);


//Distintas formas de iterar sobre los elementos obtenidos


//For - Loop. El ideal para navegadores muy antiguos.
 for (let i=0;i<list_elements.length;i++) {
     list_elements[i].style.fontSize="2rem";
 }


// const arr=[1,2,3];
// for(let i in arr) console.log(arr[i]);


//  //For - in //??????????????
// /* for (let item in list_elements) {
//     item.style.fontSize="0.5rem";
// }*/

// //For - Of
 for (const item of list_elements) {
     item.style.fontSize="2.5rem";
 }


// // // //For of....values
//  for (const item of list_elements.values()) {
//      item.style.fontSize="3rem";
//  }

//  //ForEach
//  /*list_elements.forEach(item => {
//      item.style.fontSize="0.5rem";
//  });*/

// // //ForEach más reducido
//  list_elements.forEach(item => item.style.fontSize="0.5rem");
