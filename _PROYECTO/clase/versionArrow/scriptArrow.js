// https://programadorwebvalencia.com/javascript-ejemplo-carrito-de-compra/

// -----------------------------------------------------
// Variables

//Creación del JSON simulando los datos de los productos a vender (simulando su obtención de una base de datos)
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

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// LocalStorage
const miLocalStorage = window.localStorage;


// -----------------------------------------------------

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. 
 * No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);

        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';

    const carritoSinDuplicados = new Set(carrito);

    console.log("carrito:")
    console.log(carrito);
    console.log("carrito sin duplicados:");
    console.log(carritoSinDuplicados);


    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
        console.log("miItem");
        console.log(miItem);

        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => itemId === item ? total += 1 : total, 0);

        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);

    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
	
    // Guardar el carrito en el LocalStorage
    guardarCarritoEnLocalStorage();	
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => carritoId !== id);
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// -----------------------------------------------------------------------------
// Funciones para trabajar con LocalStorage
// -----------------------------------------------------------------------------
function guardarCarritoEnLocalStorage(){
    miLocalStorage.setItem('carrito',JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage(){
    if (miLocalStorage.getItem('carrito') !== null)
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
}

// -----------------------------------------------------------------------------
// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos(); //para cargar los productos en el main con id="items"
renderizarCarrito(); //para cargar los productos en el carrito (ul con id="carrito")
// -----------------------------------------------------------------------------

