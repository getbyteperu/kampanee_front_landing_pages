import first from "../img/first.png"
import avion from "../img/avion.png"
import '../Style/Negocio.css'
import phoneproductos from "../img/phoneproductos.png"
import Footer from "./Footer";
import tecnologia from '../img/Tecnologia.png'
import ropa from '../img/Ropa.png'
import bellesa from '../img/bellesa.png'
import farmacia from '../img/Farmacia.png'
import bodegas from '../img/Bodegas.png'
import libreria from '../img/Libreria.png'
import ferreteria from '../img/Ferreteria.png'
import otros from '../img/Otros.png'
import comida from '../img/Comidas.png'
import audifonosazules from '../img/audifonosazules.png'
import taladro from '../img/taladro.png'
import hamburgesa from '../img/hamburgesa.png'
import camisa from '../img/camisa.png'
import nube from '../img/nube.png'
import cohete from '../img/cohete.png'
import telefonofunciona from '../img/telefonosfunciona.png'
import React, { useState } from 'react';
import Google from '../img/Google-Play.svg'
import Logo from '../img/Logo.svg'
import linea from '../img/linea.svg'
import kampaneeicon from '../img/kampanee_icon.svg'
import ventasicon from '../img/ventas_icon.svg'
import inventarioicon from '../img/inventario_icon.svg'
import negocioicon from '../img/negocio_icon.svg'
import Celular from '../img/Kampanee-negocios-right.png';
import LogoNegocios from '../img/logo-kampanee-negocios.png';


function Negocio() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  return (
    <>
      <div id="first" style={{
        display: "flex",
        flexDirection: "column",


      }}>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="kampaneeheader" style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          gap: "123px",
        }}>
          <div id="header" style={{
            display: "flex",
            flexDirection: "column",
            gap: "68px"
          }}>
            <h2 className="title" style={{
            }}>Descubre <span className="kampanee">Kampanee:</span> Tu Conexión con los <span className="kampanee" style={{ fontWeight: "700" }}> Negocios Locales</span></h2>
            <p className="paragraph" style={{
              color: "#565656",
            }}>Kampanee es la plataforma que une a negocios locales con clientes. Descubre ofertas exclusivas, gestiona tus productos o encuentra tu próximo lugar favorito y todo en un solo lugar!</p>
            <div className="btnes1" style={{
              display: "flex",
              gap: "28px"
            }}>
              <div className="btnes1">
                <button id="btuno" className="kampanee-btn">Explorar ahora</button>
                <div className="btgoogle2">
                  <img src={Google} />
                </div>
              </div>

            </div>
          </div>
          <img
            className="imagenheader"
            src={first}
            alt=""
            style={{
              width: "872px",
              height: "786px",
            }}
          />

        </div>
      </div>
      <div id="second" style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "99px",
        marginLeft: "139px",
        gap: "51px",
        justifyContent: "center",

        textAlign: "center",
      }}>
        <h2 className="title2" style={{
          width: "785px",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center"
        }}>
          <span className="exploraydescubre" style={{ fontWeight: "700" }}>Explora y Descubre</span>
          <span style={{ fontWeight: "500" }}>Nuevas Experiencias</span>
        </h2>
        <p className="paragraph2" >Encuentra tu próximo lugar favorito en Kampanee, donde podrás explorar una amplia variedad de negocios locales y descubrir nuevas experiencias.</p>

        <div className="cards mb-5">
          <div id="cardavion" className="card">
            <img src={avion} alt="" />
            <h4 className="cardname">Importacion</h4>

          </div>
          <div id="cardtecnologia" className="card">
            <img src={tecnologia} alt="" />
            <h4 className="cardname">Tecnologia</h4>

          </div>
          <div id="cardRopa" className="card">
            <img src={ropa} alt="" />
            <h4 className="cardname">Ropa y calzado</h4>
          </div>
          <div id="cardbellesa" className="card">
            <img src={bellesa} alt="" />
            <h4 className="cardname">Belleza y<br>
            </br>cosméticos</h4>
          </div>
          <div id="cardfarmacia" className="card">
            <img src={farmacia} alt="" />
            <h4 className="cardname">Farmacia</h4>
          </div>
          <div id="cardComidas" className="card">
            <img src={comida} alt="" />
            <h4 className="cardname">Comidas<br></br> y bebidas</h4>
          </div>
          <div id="cardbodegas" className="card">
            <img src={bodegas} alt="" />
            <h4 className="cardname">Bodegas</h4>

          </div>
          <div id="cardlibreria" className="card">
            <img src={libreria} alt="" />
            <h4 className="cardname">Librería</h4>
          </div>
          <div id="cardferreterias" className="card">
            <img src={ferreteria} alt="" />
            <h4 className="cardname">Ferreterías</h4>
          </div>
          <div id="cardotros" className="card">
            <img src={otros} alt="" />
            <h4 className="cardname">Otros</h4>
          </div>
        </div>
      </div>

      <div className="kampanee-negocios mb-5 mt-5">
        <div className="row">
          <div className="col-md-6 cont-left-negocios p-5 d-flex justify-content-start flex-column">
            <img id="logonegocios" src={LogoNegocios} className="mb-4 mt-5 mx-2 pt-5 logo-negocios-left" />
            <h1 className="mt-5 mx-5 px-2"><span>¿Eres dueño</span> de un negocio?</h1>
            <p className="mt-5 mb-5 mx-5 px-2">¡Descubre cómo Kampanee Negocios puede ayudarte a impulsar tu éxito!</p>
            <div className="btns-negocio d-flex justify-conetnt-start">
              <button className="ms-5 mx-2 explora px-2">Explorar ahora </button>
              <img src={Google} />
            </div>
          </div>
          <div className="col-md-6 mb-5 mt-5">
            <img src={Celular} className="celular" />
          </div>
        </div>
      </div>


      <div className="descubre-kampanee">
        <div className="kampaneeicon">
          <img src={kampaneeicon}></img>
        </div>
        <h1 className="descubretitle">
          Descubre todo lo que <span style={{ color: '#FF8000', fontWeight: 900 }}> Kampanee</span> tiene para ti
        </h1>

        <div className="iconytext">
          <div className="gestionventas">
            <div className="iconventas">
              <img src={ventasicon}></img>
            </div>
            <h4>Gestiona tus ventas</h4>
            <p>Brindale una mejor <br></br> experiencia de compra a tus <br></br>clientes.</p>
          </div>

          <div className="inventarioadmin">
            <div className="iconinventario">
              <img src={inventarioicon}></img>

            </div>
            <h4>Administra tu inventario</h4>
            <p>Registra tus productos en tu<br></br> inventario y optimiza tus costos.</p>
          </div>
          <div className="controlnegocio">
            <div className="iconcontrol">
              <img src={negocioicon}></img>
            </div>
            <h4>Ten el control de tu negocio</h4>
            <p>Controla el estado de tus ventas,<br></br> gastos y del capital invertido en tu<br></br>negocio.</p>
          </div>
        </div>
      </div>

      <div className="me">
        <div className="funcionakampanee">
          <h1 className="funcionatittle">
            ¿Cómo funciona <span style={{ color: '#FF8000', fontWeight: 900 }}>Kampanee?</span>
          </h1>
          <div className="cartillas">

            <div className="cartilla-uno">
              <h4 className={`administra ${mostrarContenido ? 'active' : ''}`} style={{ color: '#FF8000', cursor: 'pointer' }} onClick={toggleContenido}>
                1. Administra tu negocio
              </h4>
              <div className={`administraparrafo-container ${mostrarContenido ? 'active' : ''}`}>
                <p className="administraparrafo" style={{ color: '#565656' }}>
                  ¡Kampanee permite a los negocios digitalizar sus finanzas.
                  Administrar ventas, gastos, deudas, inventario, balance mucho
                  más!
                </p>
              </div>
            </div>
            <div className="cartilla-dos">
              <h4>2. Muéstrate a potenciales clientes</h4>
            </div>
            <div className="cartilla-tres">
              <h4>3. Toma mejores decisiones</h4>
            </div>
          </div>
          <div className="imgfuncionakampanee">
            <img className="telefonos" src={telefonofunciona} alt="" />
          </div>

        </div>


        <div className="inventario-kampanee">
          <h1 className="inventario-tittle">
            Controla tu <span style={{ color: '#FF8000', fontWeight: 900 }}>inventario</span> y <br /> optimiza tus costos
          </h1>
          <p className="inventario-parrafo">Con Kampanee visualiza tu inventario y mantente informado si
            cuentas con stock o tienes productos a punto de vencer. Registra la
            cantidad, el valor y la descripción de cada artículo para monitorear y
            hacer crecer las ganancias de tu negocio.</p>
          <button className="btexplora">Explorar ahora</button>

          <div className="phonocohete">
            <img className="lineainventario" src={linea}></img>

            <img className="nubeinventario" src={nube}></img>

            <img className="celphoneproductosular" src={phoneproductos} alt="" />
            <img className="cohete" src={cohete}></img>
          </div>
        </div>
      </div>

      <div id="ayudacoainter" className="usuario-container">

        <Footer />


      </div>
    </>

  )
}

export default Negocio;