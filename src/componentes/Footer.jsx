import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Footer.css'
import kampanee from '../img/Logo.svg'
import soporte1 from '../img/soporte.svg'
import soporte2 from '../img/soporte2.svg'

function Footer() {
    return(
        <div className="secc-footer">
            <div className="container-ayuda">
              <h1 className="titulo-1">¿ Necesitas ayuda? </h1>
              <h1 className="titulo-2">¡Ponte en <span className="text-color">contacto con nosotros!</span></h1>
              <div className="cards-footer">
                <div className="card-izquierda">
                  <h1 className="card-titulo-1">Soporte de Ayuda</h1>
                  <h1 className="card-titulo-2">¿Tienes problemas para usar nuestra app?</h1>
                  <p>Te ayudaremos a resolver todas las dudas con nuestras soluciones, para que puedas sacar el máximo provecho a Kampanee.</p>
                  <img src={soporte2}/>
                </div>
                <div className="card-derecha">
                  <img src={soporte1}/>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Footer;