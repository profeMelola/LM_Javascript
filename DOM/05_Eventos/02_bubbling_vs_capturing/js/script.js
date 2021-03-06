
//Handler para mostrar la información
function showContent(e) {
   console.log(e);
   alert("El elemento se originó en "+e.target.id+" y ahora estoy en "+this.id);
   
}

//Obtengo los divs para la demostración de Bubbling
let bubblingDivs = document.querySelectorAll("#bubbling div");
//Obtengo los divs para la demostración de Capturing
let capturingDivs = document.querySelectorAll("#capturing div");


//Añado los manejadores de eventos (click) para cada uno de ellos en Bubbling
// bubblingDivs.forEach(function(item) {
//      item.addEventListener('click',showContent);
// });

bubblingDivs.forEach(item => item.addEventListener('click',showContent));

//Añado los manejadores de eventos (click) para cada uno de ellos en Capturing
capturingDivs.forEach(function(item) {
    item.addEventListener('click',showContent, true); //si quiero que los eventos se gestionen mediante capturing
});