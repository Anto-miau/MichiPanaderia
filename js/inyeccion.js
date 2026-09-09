function inyectarFooter() {
  const contenedorFooter = document.getElementById("footer");
  if (contenedorFooter) {
    contenedorFooter.innerHTML = `
      <div class="footer">
        <div>Michi Panaderia</div>
        
        <div class="metodos-pago">
          <span>VISA</span>
          <span>EFECTIVO</span>
          <span>TRANSFERENCIA</span>
        </div>

        <div class="footer-links">
          <div class="footer-columna">
            <h2>Conócenos!</h2>
            <div class="conocenos">
              <div><a href="../contactos/index.html">Contactanos</a></div>
              <div><a href="../locales/index.html">Locales</a></div>
              <div><a href="../terminos/index.html">Términos y condiciones</a></div>
              <div><a href="../terminos/index.html">Políticas y privacidad</a></div>
            </div>
          </div>

          <div class="footer-columna">
            <h2>Redes Sociales</h2>
            <div class="conocenos">
              <div><a href="#">Instagram</a></div>
              <div><a href="#">Facebook</a></div>
            </div>

            <h2 style="margin-top: 1.2rem;">Mi Cuenta</h2>
            <div class="conocenos">
              <div><a href="#">Pedir</a></div>
              <div><a href="#">Iniciar sesión</a></div>
            </div>
          </div>

          <div class="noticias">
            <h2>Boletín</h2>
            <label>Mantente informado! Únete a nuestro portal de noticias.</label>
            <form>
              <input type="email" placeholder="Ingresa Email">
              <button type="submit">Subscribete</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

inyectarFooter();