const contenedorDestacados = document.getElementById("prod");

productos.forEach(producto => {
  if (producto.Destacado) {
    contenedorDestacados.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toLocaleString()}</p>
              <button class="btn-comprar" onclick="window.location.href='pages/store.html'" >Ver en tienda</button>

      </div>
    `;
  }
});