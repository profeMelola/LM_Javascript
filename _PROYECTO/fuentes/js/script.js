// -----------------------------------------------------
// Variables

// Creación de un array de productos (simulando su obtención de una base de datos)
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'imgs/patata.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        imagen: 'imgs/cebolla.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        imagen: 'imgs/calabacin.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        imagen: 'imgs/fresas.jpg'
    }

];

let carrito = [];
const divisa = '€';

//observa el html y pon los selectores adecuados
const DOMitems = document.querySelector('??????');
const DOMcarrito = document.querySelector('??????');
const DOMtotal = document.querySelector('?????');
const DOMbotonVaciar = document.querySelector('?????');

// -----------------------------------------------------

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. 
 * Son los productos a vender.
 * No confundir con el carrito
 */
function renderizarProductos() {

    baseDeDatos.forEach((info) => {

        //Observa la captura del div correspondiente a cada producto y construye dinámicamente el correspondiente código HTML
        //
        

    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {

}

/**
 * Devuelve el item del carrito
 */
function getItem(id){

}


/**
 * Devuelve el número de unidades de un mismo producto en el carrito
 */
function getNumUnidades(id){

}


/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {

}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {

}

// -----------------------------------------------------------------------------
// Eventos
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Inicio
renderizarProductos(); //para cargar los productos en el main con id="items"
renderizarCarrito(); //para cargar los productos en el carrito (ul con id="carrito")
// -----------------------------------------------------------------------------

