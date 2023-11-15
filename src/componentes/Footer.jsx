import React from "react";
import '../Style/Footer.css';
import Asesor1 from '../img/Asesor 1.svg';
import Asesor2 from '../img/asesor2.png';
import logoWSP from '../img/wspLogo.png';
import logoPlay from '../img/playstore-app.png';
import bannerLeft from '../img/bannerL.svg';
import bannerRight from '../img/bannerR.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import kampanee from '../img/Logo.svg'
import soporte1 from '../img/soporte.svg'
import soporte2 from '../img/soporte2.svg'
import Logo from '../img/Logo.svg'

function Footer() {
  return (
    <>
      <div className="secc-footer">
        <div className="container-ayuda">
          <h1 className="titulo-1">¿ Necesitas ayuda? </h1>
          <h1 className="titulo-2">¡Ponte en <span className="text-color">contacto con nosotros!</span></h1>
          <div className="cards-footer">
            <div className="card-izquierda">
              <h1 className="card-titulo-1">Soporte de Ayuda</h1>
              <h1 className="card-titulo-2">¿Tienes problemas para usar nuestra app?</h1>
              <p>Te ayudaremos a resolver todas las dudas con nuestras soluciones, para que puedas sacar el máximo provecho a <b>Kampanee.</b></p>
              <img src={soporte2} />
            </div>
            <div className="card-derecha">
              <img src={soporte1} />
            </div>
          </div>
        </div>
      </div>
      <div className="secc-principal">
        <div className="row mt-5 w-100">
          <div className="col-md-6 pe-5">
            <div className="asesor-1 col-md-6 w-100">
              <div className="secc-asesor-1 d-flex">
                <div className="texto-asesor-1">
                  <h1>¿Tienes alguna <b>duda?</b><span className='contact-text'> ¡contáctanos!</span></h1>
                </div>
                <img src={Asesor1} alt="" />
              </div>
              <button className='contact-wsp'><img src={logoWSP} />Asesor Kampanee</button>
            </div>

          </div>
          <div className="col-md-6 ps-5">
            <div className="asesor-1 col-md-6 w-100">

              <div className="contenededor--res">
                <div className="secc-asesor-1 d-flex">
                  <div className="texto-asesor-1">
                    <h1>¿Tienes alguna <b>sugerencia?</b><span className='contact-text'> ¡contáctanos!</span></h1>
                  </div>
                  <img src={Asesor2} alt="" />

                <button className='contact-wsp2'><img src={logoWSP} />Dr. Kampanee</button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="secc-banner">
          <div className="banner-left">
            <img src={bannerLeft}></img>
          </div>
          <div className="banner-text">
            <h1><b>Conoce</b> a las tiendas locales y <b>forma parte</b> de esta <b>comunidad</b></h1>
            <p>Descarga la app y se parte de nosotros.</p>
            <img src={logoPlay} alt="" />
          </div>
          <div className="banner-right">
            <img src={bannerRight}></img>
          </div>
        </div>

        <div className="text-end">
          <div className="columns">
            <img src={Logo} />
          </div>
          <div className="columns">
            <h1>Políticas y Privacidad</h1>
            <p>Marco normativo y principios rectores</p>
            <p>¿Qué información recolectamos? </p>
            <p>Sobre la veracidad de los Datos Personales </p>
            <p>El banco de datos de titularidad de YAESTA S.A.C</p>
            <p>¿Para qué utilizamos la información del Usuario?</p>
          </div>
          <div className="columns">
            <h1>Legales</h1>
            <p>Promociones en Bodegas</p>
            <p>Promoción en Ferreterías </p>
            <p>Promoción en Farmacias </p>
            <p>Promoción en Tienda de Ropa</p>
          </div>
          <div className="columns">
            <h1>Términos y Condiciones</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;