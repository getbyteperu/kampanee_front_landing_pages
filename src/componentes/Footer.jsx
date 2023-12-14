import React from "react";
import '../Style/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Help from '../img/Help.svg';
import Asesor1 from '../img/Asesor 1.png';
import Asesor2 from '../img/Asesor 2.png';
import Asesoria1 from '../img/Asesoria 1.svg';
import Asesoria2 from '../img/Asesoria 2.svg';
import Kampanee from '../img/Logo.svg'
import Google from '../img/Google-Play.svg';
import HelpResponsive from '../img/Help-responsive.png';
import Whts from '../img/wspLogo.png';

function Footer(props) {
  return (
    <div className="cont-footer">
      <section className="w-100 help mt-5 d-flex justify-content-center align-items-center flex-column mb-5">
        <h1>¿Necesitas Ayuda?</h1>
        <h1>¡Ponte en <span>contacto con nosotros!</span></h1>
        <img src={Help} className="help-img mt-4" />
        <img src={HelpResponsive} className="help-movil mt-4" />
      </section>
      <section className="w-100 asesores d-flex justify-content-center align-items-center flex-column mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="asesor-1 d-flex justify-content-center">
              <img src={Asesoria1} className="asesoria" />
              <img src={Asesor1} alt="" />
            </div>
            <button className="wsp-asesores"><img src={Whts} className="p-1 mx-1"  />Asesor Kampanee</button>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="asesor-2 d-flex justify-content-center">
              <img src={Asesoria2} className="asesoria" />
              <img src={Asesor2} alt="" />
            </div>
            <button className="wsp-asesores"><img src={Whts}  className="p-1 mx-1" />Dr. Kampanee</button>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="row cont-banner">
          <div className="col-md-6 footer-left">
            <img src={props.banner1} />
          </div>
          <div className="col-md-6 footer-right">
            <div className="texto-footer ">
              <h1>{props.title}</h1>
              <p>{props.parrafo}</p>
              <img src={Google} />
            </div>
            <img src={props.banner2} className="banner-2"/>
            <img src={Google} className="google-responsive" />
          </div>
        </div>
      </section>
      <footer className="footer mb-2 mx-5">
        <div className="row">
          <div className="col">
            <img src={Kampanee} className="logo-footer" />
          </div>
          <div className="col">
            <h1>Políticas y Privacidad</h1>
            <p>Marco normativo y principios rectores</p>
            <p>¿Qué información recolectamos? </p>
            <p>Sobre la veracidad de los Datos Personales </p>
            <p>El banco de datos de titularidad de YAESTA S.A.C</p>
            <p>¿Para qué utilizamos la información del Usuario?</p>
          </div>
          <div className="col">
            <h1>Legales</h1>
            <p>Promociones en Bodegas</p>
            <p>Promoción en Ferreterías </p>
            <p>Promoción en Farmacias </p>
            <p>Promoción en Tienda de Ropa</p>
          </div>
          <div className="col">
            <h1>Términos y Condiciones</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;