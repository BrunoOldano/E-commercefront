import React from "react";
import "./navbar.css"

class Navbar extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {};
    }
  
  render() {
    return (
      <>
      <header>
          <nav class="navbar fixed-top navbar-dark bg-dark navbar-nav-scroll">
            <div class="container-fluid ">
               <a href="#/" className="logo">
              <img src={logo} alt="logo de la empresa"/>
            </a>
              <a className="navbar-brand letter-navbar" href="'#'">Inicio</a>
              <a className="navbar-brand letter-navbar" href="'#'">Hombres</a>
              <a className="navbar-brand letter-navbar" href="'#'">Mujeres</a>
              <a className="navbar-brand letter-navbar" href="'#'">Niños</a>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
export default navbar; 