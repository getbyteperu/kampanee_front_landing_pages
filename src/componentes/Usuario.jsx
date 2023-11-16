import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Usuario.css'
import Logo from '../img/Logo.svg'
import Google from '../img/Google-Play.svg'
import Img1 from '../img/Img-1.svg'
import sub01 from '../img/sub01.svg'
import sub02 from '../img/sub02.svg'
import sub03 from '../img/sub03.svg'
import Img2 from '../img/Img-2.svg'
import Img3 from '../img/Img-3.svg'
import Img4 from '../img/Img-4.svg'
import sub04 from '../img/sub04.svg'
import Footer from "./Footer";
import logoUsuario from '../img/kampaUsu.svg'



function Usuario() {
  return (
    <div className="usuario-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div>
        <h1 className="texto-1">
          Únete y forma parte de esta <span>Comunidad</span>
        </h1>
        <h2 className="texto-2">
          Únete a esta comunidad y disfruta de los beneficios exclusivos al formar parte de la plataforma de Kampanee usuario.
        </h2>
      </div>
      <div className="contenedor-2">
        <button className="boton-1">Registrarme</button>
        <img className="google" src={Google} alt="Google" />
      </div>
      <div>
        <img className="img1" src={Img1} alt="Img1" />
      </div>
      <div className="contenedor-002">
        <button className="boton-1">Explorar ahora</button>
        <img className="google" src={Google} alt="Google" />
      </div>
      <div>
        <h1 className="texto-01">
          <span>Encuentra</span> los mejores productos  para tu negocio en <span>Kampanee</span>
        </h1>
      </div>
      <div className="container">
        <div className="contenedor01">
          <img className="d-flex end" src={sub01} alt="sub01" />
          <p> Encuentra fácil a tus proveedores</p>

        </div>
        <div className="contenedor02">
          <img src={sub02} alt="sub02" />
          <p> Contacto rápido con el proveedor por redes sociales </p>
        </div>
      </div>
      <div>
        <div className="contenedor03">
          <img src={sub03} alt="sub03" />
          <p> Visualiza los productos de tus proveedores </p>
        </div>
      </div>


      <div>
        <img className="img2" src={Img2} alt="Img2" />
      </div>

      <div className="general">
        <div className="contenedor04">
          <div className="cont04-text">
            <img className="logo0" src={Logo} alt="Logo" />
            <img className="logo0-res" src={logoUsuario} alt="Logo" />
            <h1 className="texto-001-res">
              <span>Kampanee</span> te acerca a tus proveedores favoritos
            </h1>
            <h2 className="texto-002-res">
              Encuentra todo lo que necesitas cerca de ti, en un solo lugar. El aplicativo perfecto encontrar los mejores productos. ¡Comprar nunca ha sido tan fácil!
            </h2>
          </div>
          <div>
            <img className="img3" src={Img3} alt="Img3" />
          </div>
          <div className="contenedor-002">
            <button className="boton-1">Explorar ahora</button>
            <img className="google" src={Google} alt="Google" />
          </div>


          <div>
            <h1 className="texto-001">
              <span>Kampanee</span> te acerca a tus proveedores favoritos
            </h1>
            <div className="contenedor006">
              <h2 className="texto-002">
                Encuentra todo lo que necesitas cerca de ti, en un solo lugar. El aplicativo perfecto encontrar los mejores productos. ¡Comprar nunca ha sido tan fácil!                    </h2>
            </div>
            <div className="contenedor007">
              <button className="boton-01">Registrarme</button>
              <img className="google" src={Google} alt="Google" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Usuario;
