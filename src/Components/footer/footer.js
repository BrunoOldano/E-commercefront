import React from 'react';
import "./footer.css"

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
              <h4>Empresa</h4>
                <ul>
                  <li>
                    <a href="#/">Acerca de nosotros</a>
                  </li>
                  <li>
                    <a href="#/">Nuestros servicios</a>
                  </li>
                  <li>
                    <a href="#/">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="#/">Defensa Al Consumidor</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Compra Online</h4>
                <ul>
                  <li>
                    <a href="#/">Envios</a>
                  </li>
                  <li>
                    <a href="#/">Devoluciones</a>
                  </li>
                  <li>
                    <a href="#/">Estado De La Orden</a>
                  </li>
                  <li>
                    <a href="#/">Metodos De Pago</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Ayuda</h4>
                <ul>
                  <li>
                    <a href="#/">Preguntas Frecuentes</a>
                  </li>
                  <li>
                    <a href="#/">¿Necesitas Ayuda?</a>
                  </li>
                  <li>
                    <a href="#/">Guia De Talles</a>
                  </li>
                  <li>
                    <a href="#/">Contacto</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Redes Sociales</h4>
                <script
                  src="https://kit.fontawesome.com/b50de914ce.js"
                  crossorigin="anonymous"
                ></script>
                <div className="social-links">
                <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default footer; 