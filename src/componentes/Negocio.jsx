import React, { useState } from 'react';
import HeadKampanee from '../img/Head-Kampanee.png';
import Logo from '../img/Logo.svg';
import Google from '../img/Google-Play.svg';
import Importacion from '../img/Importacion.png';
import Tecnlogia from '../img/Tecnologia.png';
import Ropa from '../img/Ropa.png';
import Belleza from '../img/Belleza.png';
import Farmacia from '../img/Farmacia.png';
import Comida from '../img/Comidas.png';
import Bodegas from '../img/Bodegas.png';
import Libreria from '../img/Libreria.png';
import Ferreterias from '../img/Ferreteria.png';
import Otros from '../img/Otros.png';
import Celular from '../img/Kampanee-negocios-right.png';
import LogoNegocios from '../img/logo-kampanee-negocios.png';
import LogoK from '../img/Logok.svg';
import Venta from '../img/Shop.svg';
import Inventario from '../img/Bag.svg';
import Control from '../img/Money-send.svg';
import How from '../img/How.png';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import InventarioRight from '../img/Inventario.png';
import Footer from './Footer'
import '../Style/Negocio.css'

function Negocio() {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const secciones = [
    { titulo: '1. Administra tu Negocio', contenido: '¡Kampanee permite a los negocios digitalizar sus finanzas. Administrar ventas, gastos, deudas, inventario, balance y mucho más!' },
    { titulo: '2. Muestrate a potenciales clientes', contenido: '¡Kampanee permite a los negocios digitalizar sus finanzas. Administrar ventas, gastos, deudas, inventario, balance y mucho más!' },
    { titulo: '3. Toma mejores decisiones', contenido: '¡Kampanee permite a los negocios digitalizar sus finanzas. Administrar ventas, gastos, deudas, inventario, balance y mucho más!' }
  ];

  const [datos, setDatos] = useState([
    { imagen: Importacion, texto: 'Importación' },
    { imagen: Tecnlogia, texto: 'Tecnologia' },
    { imagen: Ropa, texto: 'Ropa y Calzado' },
    { imagen: Belleza, texto: 'Belleza y Cosméticos' },
    { imagen: Farmacia, texto: 'Farmacia' },
    { imagen: Comida, texto: 'Comidas y bebidas' },
    { imagen: Bodegas, texto: 'Bodegas' },
    { imagen: Libreria, texto: 'Librería' },
    { imagen: Ferreterias, texto: 'Ferreterías' },
    { imagen: Otros, texto: 'Otros' },
  ]);

  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  const Tarjeta = ({ imagen, texto }) => (
    <div className="card-explora">
      <img src={imagen} className='img-explora' />
      <p className=''>{texto}</p>
    </div>
  );


  return (
    <div className="container-kampanee-negocios">
      <section className='head-kampanee'>
        <div className="row head p-5">
          <div className="col-md-6 head-left">
            <img src={Logo} className='logo-negocios' />
            <div className="head-texto-left ">
              <h1 className='mt-5 mb-5'>Descubre <span>Kampanee: </span>Tu Conexión con los <span>Negocios Locales</span></h1>
              <p>Kampanee es la plataforma que une a negocios locales con clientes. Descubre ofertas exclusivas, gestiona tus productos o encuentra tu próximo lugar favorito y todo en un solo lugar!</p>
            </div>
            <div className="btns-head-kampanee d-flex justify-content-start mt-5 mb-5">
              <button >Explorar ahora</button>
              <img className="mx-2" src={Google} />
            </div>
          </div>
          <div className="col-md-6 head-right-kampanee d-flex justify-content-start align-items-center">
            <img src={HeadKampanee} className='img-right-negocios' />
          </div>
        </div>
      </section>

      <section className='explora-descubre mt-3'>
        <div className="texto-explora d-flex justify-content-center text-center flex-column">
          <h1>Explora y Descubre</h1>
          <h2>Nuevas Experiencias</h2>
          <p className='mt-5'>Encuentra tu próximo lugar favorito en Kampanee, donde podrás explorar una amplia variedad de negocios locales y descubrir nuevas experiencias.</p>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center w-100 mt-3">
          <div className="row d-flex justify-content-center align-items-center cards-explora mx-0 w-100 text-center">
            {datos.slice(0, 5).map((item, index) => (
              <div key={index} className="col-2 px-2 mx-2 mt-5">
                <Tarjeta imagen={item.imagen} texto={item.texto} />
              </div>
            ))}
            <div className="col-1"></div>{/* Espacio extra */}
          </div>
          <div className="row cards-explora mx-0 w-100 text-center d-flex justify-content-center align-items-center ">
            {datos.slice(5, 10).map((item, index) => (
              <div key={index} className="col-2 px-2 mx-2 mt-3">
                <Tarjeta imagen={item.imagen} texto={item.texto} />
              </div>
            ))}
            <div className="col-1"></div>{/* Espacio extra */}
          </div>
        </div>
      </section>

      <section className='kampanee-negocios'>
        <div className="row cont-kampanee-negocios d-flex justify-content-end align-items-center">
          <div className="col-md-6 cont-left-negocios">
            <img src={LogoNegocios} alt="" />
            <h1><span>¿Eres dueño </span>de un negocio?</h1>
            <p className='pt-4'>¡Descubre cómo Kampanee Negocios puede ayudarte a impulsar tu éxito!</p>
            <div className="btns-head-kampanee d-flex justify-content-start mt-5 mb-5">
              <button >Explorar ahora</button>
              <img className="mx-2" src={Google} />
            </div>
          </div>
          <div className="col-md-6 cont-right-negocios d-flex justify-content-end align-items-center">
            <img  src={Celular} />
          </div>
        </div>
      </section>

      <section className='descubre-kampanee mb-5'>
        <div className="cont-descubre mb-5">
          <div className="logo-k d-flex justify-content-center">
            <img src={LogoK} className="logok mt-5 mb-3" />
          </div>
          <div className="secc-areas d-flex justify-content-center text-center flex-column mt-5">
            <h1>Descubre todo lo que</h1>
            <h1><span>Kampanee </span>tiene para ti</h1>
            <div className="row pt-5 mt-5 d-flex justify-content-center">
              <div className="col-md-4">
                <div className="card-area">
                  <img src={Venta} className='img-area' />
                  <h1>Gestiona tus ventas </h1>
                  <p>Brindale una mejor experiencia de compra a tus clientes.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-area">
                  <img src={Inventario} className='img-area' />
                  <h1>Gestiona tus ventas </h1>
                  <p>Registra tus productos en tu inventario y optimiza tus costos.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-area">
                  <img src={Control} className='img-area' />
                  <h1>Gestiona tus ventas </h1>
                  <p>Controla el estado de tus ventas, gastos y del capital invertido en tu negocio,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-how'>
        <div className="secc-how">
          <div className="row column-how">
            <div className="col-md-6 how-left d-flex justify-content-center align-items-center p-4">
              <img src={How} className='how-img' />
            </div>
            <div className="col-md-6 how-right d-flex justify-content-center align-items-center flex-column p-4">
              <div className="text-how">
                <h1>¿Como funciona <span>Kampanee?</span></h1>
              </div>
              <div className="text-dropdown p-3">
                {secciones.map((seccion, i) =>
                  <div
                    key={i}
                    className={`cont-how mb-3 mt-3 p-3 ${seccionAbierta === seccion.titulo ? 'open' : ''}`}
                    onClick={() => setSeccionAbierta(seccionAbierta === seccion.titulo ? null : seccion.titulo)}
                  >
                    <h2>{seccion.titulo} {seccionAbierta === seccion.titulo ? <FaChevronUp /> : <FaChevronDown />}</h2>
                    {seccionAbierta === seccion.titulo && <p>{seccion.contenido}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='inventario'>
        <div className="cont-inventario">
          <div className="row">
            <div className="col-md-6 inventario-left">
              <h1>Controla tu <span>Inventario</span> y optimiza tus costos</h1>
              <p className='pt-3'>Con Kampanee visualiza tu inventario y mantente informado si cuentas con stock o tienes productos a punto de vencer. Registra la cantidad, el valor y la descripción de cada artículo para monitorear y hacer crecer las ganancias de tu negocio.</p>
              <div className="btns-head-kampanee d-flex justify-content-start mt-5 mb-5">
                <button >Explorar ahora</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={InventarioRight} className='inventario-right' />
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default Negocio;