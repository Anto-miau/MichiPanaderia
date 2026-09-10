function inyectarHeader() {
  const contenedorHeader = document.getElementById("header");
  if (contenedorHeader) {
    contenedorHeader.innerHTML = `
      <header class="top-header">
            <div class="brand">
                <span class="logo-box"></span>
                <h1>Michi Panadería</h1>
            </div>
            <nav class="main-nav">
                <a href="../index.html">Home</a> |
                <a href="../productos/index.html">Productos</a> |
                <a href="../nosotros/index.html">Nosotros</a> |
                <a href="../blogs/index.html">Blogs</a> |
                <a href="../contactos/index.html">Contacto</a>
            </nav>
            <div class="cart-status">
                <span class="cart-icon">🛒</span> Cart (0)
            </div>
        </header>
    `;
  }
}

inyectarHeader();