import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Usuario.css'
import kampanee from '../img/Logo.svg'
import comunidad from '../img/comunidad1.svg'
import playStore from '../img/Google-Play.svg'
import Proveedor1 from '../img/proveedor1.svg'
import Proveedor2 from '../img/proveedor2.svg'
import Proveedor3 from '../img/proveedor3.svg'
import Producto from '../img/productos.svg'
import usuarioKampanee from '../img/usuario-kampanee.svg'
import imgAplicativo from '../img/aplicativo.svg'
import Footer from "./Footer";

function Usuario() {
  return (
    <div className="usuario-container">
      <div className="secc-inicial">
        <img src={kampanee} alt="" />
        <div className="contenedor01 d-flex">
          <div className="contenedor01-1">
            <h1>Únete y forma parte de esta <span className="text-color">Comunidad</span></h1>
            <p>Únete a esta comunidad y disfruta de los beneficios exclusivos al formar parte de la plataforma de Kampanee usuario.</p>
            <button className="btn-registro">Registrarme</button>
            <img src={playStore}/>
          </div>
          <img src={comunidad} />
        </div>
      </div>
      <div className="secc-media d-flex">
        <div>
          <h1 className="titulo-medio"><span className="text-color">Encuentra</span> los mejores productos  para tu negocio en <span className="text-color">Kampanee</span></h1>
          <div className="proveedor-cards">
            <div className="card-Prov1">
              <img src={Proveedor1}/>
              <p>Encuentra fácil a tus proveedores</p>
            </div>
            <div className="card-Prov1">
              <img src={Proveedor2}/>
              <p>Contacto rápido con el proveedor por redes sociales</p>
            </div>
            <div className="card-Prov2">
              <img src={Proveedor3}/>
              <p>Visualiza los productos de tus proveedores</p>
            </div>
          </div>
        </div>
        <img src={Producto}/>
      </div>
      <div className="secc-final d-flex">        
          <img src={imgAplicativo}/>
        <div className="app-usuarios">
          <img src={usuarioKampanee}/>
          <h1 className="titulo-final"><span className="text-color">Kampanee</span> te acerca a tus proveedores favoritos</h1>
          <p>Encuentra todo lo que necesitas cerca de ti, en un solo lugar. El aplicativo perfecto encontrar los mejores productos. ¡Comprar nunca ha sido tan fácil!</p>
          <button className="btn-registro">Explorar ahora</button>
          <img src={playStore}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Usuario;
