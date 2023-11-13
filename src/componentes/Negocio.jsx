import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Negocio.css'
import Logo from '../img/Logo.svg';
import GooglePlay from '../img/Google-Play.svg'
import HeadKampanee from '../img/Head-Kampanee.png';
import Belleza from '../img/Belleza.png';
import Bodegas from '../img/Bodegas.png';
import Comidas from '../img/Comidas.png'
import Farmacia from '../img/Farmacia.png';
import Ferreteria from '../img/Ferreteria.png';
import Importacion from '../img/Importacion.png';
import Libreria from '../img/Libreria.png';
import Otros from '../img/Otros.png';
import Ropa from '../img/Ropa.png';
import Tecnologia from '../img/Tecnologia.png';
import KampaneeNegocios from '../img/logo-kampanee-negocios.png';
import KampaneNegociosRight from '../img/Kampanee-negocios-right.png'


function Negocio() {
  return (
    <div className="secc-negocio">
      {/*Head Negocio*/}
      <div className="head-negocio m-5">
        <img src={Logo} className='logo-kampanee' />
        <div className="row">
          <div className="col-md-6 head-left">
            <h1>Descubre <span className='negrita'>Kampanee:</span>  Tu Conexión con los <span className='negrita'>Negocios Locales</span></h1>
            <p>Kampanee es la plataforma que une a negocios locales con clientes. Descubre ofertas exclusivas, gestiona tus productos o encuentra tu próximo lugar favorito y todo en un solo lugar!</p>
            <div className="buttons d-flex justify-content-start">
              <button className='btn-explorar'>Explorar ahora</button>
              <img className='ms-4 ' src={GooglePlay} />
            </div>
          </div>
          <div className="col-md-6 head-right d-flex justify-content-center">
            <img src={HeadKampanee} className='head-kampanee' alt="" />
          </div>
        </div>
      </div>
      {/* Fin de head Negocio*/}
      {/* Seccion explora y descubre*/}
      <div className="explorar">
        <div className="texto d-flex justify-content-center text-center flex-column">
          <h1>Explora y Descubre <span className='ex-negrita'>Nuevas Experiencias</span></h1>
          <p>Encuentra tu próximo lugar favorito en Kampanee, donde podrás explorar una amplia variedad de negocios locales y descubrir nuevas experiencias.</p>
        </div>
        <div className="row cards" >
          <div className="col-md-6">
            <div className="row">
              <div className="col d-flex justify-content-center flex-column"><img src={Importacion} className='img-cards' />Importación</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Tecnologia} className='img-cards' />Tecnología</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Ropa} className='img-cards' />Ropa y calzado</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Belleza} className='img-cards' />Belleza y cosméticos</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Farmacia} className='img-cards' />Farmacia</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col d-flex justify-content-center flex-column"><img src={Comidas} className='img-cards' />Comidas y bebidas</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Bodegas} className='img-cards' />Bodegas</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Libreria} className='img-cards' />Librería</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Ferreteria} className='img-cards' />Ferreterías</div>
              <div className="col d-flex justify-content-center flex-column"><img src={Otros} className='img-cards' />Otros</div>
            </div>
          </div>
        </div>
        {/* Fin Seccion explora y descubre*/}
        {/* Eres dueño de un negocio*/}
        <div className="secc-d-negocio">
          <div className="row d-flex">
            <div className="col-md-6 kampanee-negocios-left">
              <div className="left">
                <img src={KampaneeNegocios} alt="" />
                <h1>¿Eres dueño <span>de un negocio?</span></h1>
                <p>¡Descubre cómo Kampanee Negocios puede ayudarte a impulsar tu éxito!</p>
                <div className="buttons d-flex justify-content-start">
                  <button className='btn-explorar'>Explorar ahora</button>
                  <img className='ms-4 ' src={GooglePlay} />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="img-right">
                <img className="img-right-negocios" src={KampaneNegociosRight} alt="" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Negocio;