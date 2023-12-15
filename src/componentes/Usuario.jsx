import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Usuario.css';
import Footer from "./Footer";
import BannerLeft from '../img/Banner-usuario-Left.svg'
import BannerRight from '../img/Banner-usuario-Right.svg'
import Logo from '../img/Logo.svg';
import Google from '../img/Google-Play.svg';
import HeadRight from '../img/Head-usuario-right.png';
import FindRight from '../img/find-right.png';
import Card1 from '../img/Card-1.svg';
import Card2 from '../img/Card-2.svg';
import Card3 from '../img/Card-3.svg';
import Proovedores from '../img/Proovedores-right.png';
import LogoUsuario from '../img/Kampanee-usuario.svg';

// Cambios día 14/12/22

function Usuario() {
  return (
    <div className="usuario-container">
      <section className='head-usuario'>
        <div className="row column-head-usuario">
          <div className="col-md-6 head-left-usuario">
            <div className="img-head">
              <img src={Logo} alt="" />
            </div>
            <div className="texto-head-usuario">
              <h1>Únete y forma parte de esta Comunidad</h1>
              <p>Únete a esta comunidad y disfruta de los beneficios exclusivos al formar parte de la plataforma de Kampanee usuario.</p>
            </div>
            <div className="btns-head-kampanee">
              <div className="btns d-flex justify-content-start mt-5 mb-5">
                <button id='escritorio' >Explorar ahora</button>
                <img className="mx-2" src={Google} alt='' />
              </div>
            </div>
          </div>
          <div className="col-md-6 head-right-usuario">
            <img src={HeadRight} alt="" />
            <div className="btns-head-kampanee-responsive ">
              <div className="btns d-flex justify-content-start mt-5 mb-5">
                <button >Explorar ahora</button>
                <img className="mx-2" src={Google} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='find'>
        <div className="cont-find">
          <div className="row column-find">
            <div className="col-md-6 find-left">
              <h1><span>Encuentra</span> los mejores productos para tu negocio en <span>Kampanee</span></h1>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="card-find">
                    <div className="cont-img">
                      <img src={Card1} className='img-card' alt='' />
                    </div>
                    <p>Encuentra fácil a tus proveedores</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-find">
                    <div className="cont-img">
                      <img src={Card2} className='img-card' alt=''/>
                    </div>
                    <p>Contacto rápido con el proveedor por redes sociales</p>
                  </div>
                </div>
              </div>
              <div className="third-card mt-3">
                <div className="cont-img">
                  <img src={Card3} className='img-card' alt=''/>
                </div>
                <p>Visualiza los productos de tus proveedores</p>
              </div>
            </div>
            <div className="col-md-6 find-right">
              <img src={FindRight} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='prooveedores'>
        <div className="cont-proovedores">
          <div className="row column-proovedores">
            <div className="col-md-6 proovedores-left">
              <img src={Proovedores} alt="" />
              <div className="btns-head-kampanee-responsive" id='usuario-responsive'>
                <div className="btns d-flex justify-content-start mt-5 mb-5">
                  <button >Explorar ahora</button>
                  <img className="mx-2" src={Google} alt=''/>
                </div>
              </div>
            </div>
            <div className="col-md-6 proovedores-right">
              <img src={LogoUsuario} alt=''/>
              <h1><span>Kampanee</span> te acerca a tus proveedores favoritos</h1>
              <p>Encuentra todo lo que necesitas cerca de ti, en un solo lugar. El aplicativo perfecto encontrar los mejores productos. ¡Comprar nunca ha sido tan fácil!</p>
              <div className="btns-head-kampanee">
                <div className="btns d-flex justify-content-start mt-5 mb-5">
                  <button id='escritorio' >Explorar ahora</button>
                  <img className="mx-2" src={Google} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer
        title="Conoce a las tiendas locales y forma parte de esta comunidad"
        parrafo="Descarga la app y se parte de nosotros."
        banner1={BannerLeft}
        banner2={BannerRight} />

    </div>
  )
}

export default Usuario;
