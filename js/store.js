let carrito = [];

function agregarProductoAlCarrito(idProducto) {
  let productoEnCarrito = null;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === idProducto) {
      productoEnCarrito = carrito[i];
      break;
    }
  }

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    let productoOriginal = null;
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === idProducto) {
        productoOriginal = productos[i];
        break;
      }
    }
    if (productoOriginal) {
      carrito.push({ ...productoOriginal, cantidad: 1 });
    }
  }

  actualizarCarritoHTML();
}

function eliminarProductoDelCarrito(idProducto) {
  carrito = carrito.filter(p => p.id !== idProducto);
  actualizarCarritoHTML();
}

function restarCantidadProducto(idProducto) {
  const producto = carrito.find(p => p.id === idProducto);
  if (producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      eliminarProductoDelCarrito(idProducto);
    }
  }
  actualizarCarritoHTML();
}

function sumarCantidadProducto(idProducto) {
  const producto = carrito.find(p => p.id === idProducto);
  if (producto) {
    producto.cantidad++;
  }
  actualizarCarritoHTML();
}

function manejarClickComprar(evento) {
  if (evento.target.classList.contains("btn-comprar")) {
    const productoId = evento.target.dataset.id;
    agregarProductoAlCarrito(productoId);
  }
}

function manejarClickCarrito(evento) {
  const target = evento.target;
  const productoId = target.dataset.id;
  const accion = target.dataset.action;

  if (accion === "eliminar") {
    eliminarProductoDelCarrito(productoId);
  } else if (accion === "restar") {
    restarCantidadProducto(productoId);
  } else if (accion === "sumar") {
    sumarCantidadProducto(productoId);
  }
}
function actualizarCarritoHTML() {
  const contenedorCarrito = document.querySelector("#carrito");
  contenedorCarrito.innerHTML = "";

  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
    cantidadTotal += producto.cantidad;

    contenedorCarrito.insertAdjacentHTML("beforeend", `
      <div class="item-carrito">
        <p>${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toLocaleString()}</p>
        <div class="item-carrito-buttons">
          <button class="btn-cantidad" data-id="${producto.id}" data-action="restar">-</button>
          <button class="btn-cantidad" data-id="${producto.id}" data-action="sumar">+</button>
          <button class="btn-eliminar" data-id="${producto.id}" data-action="eliminar">Eliminar</button>
        </div>
      </div>
    `);
  });
  contenedorCarrito.insertAdjacentHTML("beforeend", `
    <div class="carrito-total">
      <p>Total de productos: <strong>${cantidadTotal}</strong></p>
      <p>Total a pagar: <strong>$${total.toLocaleString()}</strong></p>
    </div>
  `);
}  

function agregarProductos() {
  const contenedor = document.querySelector("#tienda");

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    contenedor.insertAdjacentHTML("beforeend", `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toLocaleString()}</p>
        <button class="btn-comprar" type="button" data-id="${producto.id}">Comprar</button>
      </div>
    `);
  }

  contenedor.addEventListener("click", manejarClickComprar);
}

agregarProductos();
document.querySelector("#carrito").addEventListener("click", manejarClickCarrito);

