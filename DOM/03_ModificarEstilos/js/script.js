//probar desde consola
// let img=document.querySelector("img"); //devuelve el primer img que encuentra
// img.style.display="none";

// //Escondemos la tercera imagen
 let hiddenImg = document.querySelector("img:nth-child(3)");

 hiddenImg.style.display="none";
// hiddenImg.style.border="3px solid red";

// A nivel de rendimiento es mejor cambiar las clases, no añadir estilos inline!!!!!
// Las imgs no tienen ninguna clase en el htmml
//Añadimos dos clases border y otraAltura a todas las imágenes
let images = document.querySelectorAll("img"); //devuelve un array de nodelist

images.forEach(imagen => {
    imagen.classList.add("border");
    imagen.classList.add("otraAltura");
});

//Quito el borde de la cuarta imagen
let noborderImg = document.querySelector("img:nth-child(4)");

noborderImg.classList.remove("border");