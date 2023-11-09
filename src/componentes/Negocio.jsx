import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Negocio.css'
import Logo from '../img/Logo.svg';
import GooglePlay from '../img/Google-Play.svg'
import HeadKampanee from '../img/Head-Kampanee.png';


function Negocio() {
  return (
    <div className="secc-negocio">
      <div className="head-negocio">
        <img src={Logo} className='logo-kampanee' />
        <div className="row">
          <div className="col-md-6">
            <h1>Descubre <span>Kampanee:</span>  Tu Conexión con los <span>Negocios Locales</span></h1>
            <p>Kampanee es la plataforma que une a negocios locales con clientes. Descubre ofertas exclusivas, gestiona tus productos o encuentra tu próximo lugar favorito y todo en un solo lugar!</p>
            <div className="buttons">
              <button>Explorar ahora</button>
              <img src={GooglePlay} />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={HeadKampanee} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Negocio;