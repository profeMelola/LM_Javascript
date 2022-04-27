
// --------------------------------------------
// ----------------- INLINE -------------------
// Como solo hay una propiedad onclick, no podemos asignar más de un handler.
// --------------------------------------------
//Función para el inline handler
function changeColor(e){
    console.log("He hecho CLICK en el evento con el manejado INLINE");
    //e.target.style.backgroundColor = "red";
    document.querySelector('.container>p').style.backgroundColor = "red";
}

function changeColor2(e,cadena,elemento) {
    console.log("He hecho CLICK en el evento con el manejado INLINE ..."+cadena);
    e.target.style.backgroundColor = "yellow";

    console.log("elemento:"+elemento);
    console.log("background del elemento:"+elemento.style.backgroundColor);
}
// --------------------------------------------

// --------------------------------------------
// --------------- MANEJADOR (event handler) ---
// Como solo hay una propiedad onclick, no podemos asignar más de un handler.
//Por ejemplo:
//input.onclick = function() { alert(1); }
//input.onclick = function() { alert(2); } // reemplaza el handler anterior handler
// --------------------------------------------

//Obtengo el elemento
const example = document.getElementById("example");

// FORMA 1: Con funciones normales
//Defino la función manejador
 //function doSomething(e) {
 //    console.log("He hecho click en el DIV con ID Example");
 //    e.target.style.backgroundColor = "green";
 //}

//Asigno dicha función mediante la propiedad de evento
//example.onclick = doSomething;

// FORMA 2: Con función anónima (callback)
//  example.onclick = function (e){
//      console.log("He hecho click en el DIV con ID Example (callback)");
//      e.target.style.backgroundColor = "green";
//  };

// FORMA 3: Con función flecha
example.onclick = e =>{
     console.log("He hecho click en el DIV con ID Example (arrow)");
     e.target.style.backgroundColor = "green";
};

// NOTA: Para eliminar un handler, asigna elem.onclick = null.
example.onclick = null;

// --------------------------------------------

// --------------------------------------------
// --------------- ESCUCHADOR -----------------
// El problema fundamental de las formas ya mencionadas para asignar handlers 
// es que no podemos asignar multiples handlers a un solo evento.
// https://es.javascript.info/introduction-browser-events
// --------------------------------------------
//Obtengo el elemento
let listener = document.getElementById("listener");

//Añado el handler mediante la función addEventListener
listener.addEventListener("click", e => {
    console.log("He hecho click en el DIV con ID Listener");
    e.target.style.color = "white";
    e.target.style.backgroundColor = "blue";
});



//Función para mostrar la posición en la que está el puntero del ratón
function showMousePosition(e) {
    let x = document.getElementById("X");
    let y = document.getElementById("Y");
    // PageX / PageY representan las coordenadas 
    x.textContent = e.pageX;
    y.textContent = e.pageY;
}
//Añado el manejador de eventos para obtener la posición del puntero del ratón
//Necesito hacerlo así para poder quitarla posteriormente
document.querySelector("html").addEventListener("mousemove",showMousePosition);

//Quito el manejador el evento
document.getElementById("stop").onclick = function (e) {
    document.querySelector("html").removeEventListener("mousemove",showMousePosition);
};

