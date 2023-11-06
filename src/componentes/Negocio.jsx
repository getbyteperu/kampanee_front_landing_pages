import GooglePlayButton from "../componentes/GooglePlayButton"
import Logo from "../componentes/Logo"
import first from "../img/first.png"
import avion from "../img/avion.png"
import '../Style/Negocio.css'
import celular from "../img/mockup flyer 1.png"
import telefonos from "../img/telefonos.png"

export default function Negocio() {
    return (
        <>
            <div id="first" style={{
                display: "flex",
                flexDirection: "column",

                
            }}>
                <Logo />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "123px",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "68px"
                    }}>
                        <h2 className="title" style={{
                            width: "682px"
                        }}>Descubre <span className="kampanee">Kampanee:</span> Tu Conexión con los <span className="kampanee" style={{ fontWeight: "700" }}>Negocios Locales</span></h2>
                        <p className="paragraph" style={{
                            width: "648px"
                        }}>Kampanee es la plataforma que une a negocios locales con clientes. Descubre ofertas exclusivas, gestiona tus productos o encuentra tu próximo lugar favorito y todo en un solo lugar!</p>
                        <div style={{
                            display: "flex",
                            gap: "28px"
                        }}>
                            <button className="kampanee-btn">Explorar ahora</button>
                            <GooglePlayButton />
                        </div>
                    </div>
                    <img src={first} alt="" style={{
                        width: "872.942px",
                        height: "786px",
                    }} />
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
                <h2 className="title" style={{
                    width: "785px",
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center"
                }}>
                    <span className="kampanee" style={{ fontWeight: "700" }}>Explora y Descubre</span>
                    <span style={{ fontWeight: "500" }}>Nuevas Experiencias</span>
                </h2>
                <p className="paragraph" style={{
                    width: "846px",
                    textAlign: "center",
                    fontSize: "18px",
                    alignSelf: "center"
                }}>Encuentra tu próximo lugar favorito en Kampanee, donde podrás explorar una amplia variedad de negocios locales y descubrir nuevas experiencias.</p>
                <div className="cards">
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                    <div className="card">
                        <img src={avion} alt="" />
                        Importacion
                    </div>
                </div>
            </div>

            <div className="kampanee-negocios">
                <div className="kampaneelogodueño">
                    <Logo />
                </div>



                <h1 className="dueñotitle">
                    <span style={{ color: '#FF8000' }}>¿Eres dueño</span> <span>de un <br /> negocio?</span>
                </h1>

                <p className="dueñodescripcion">¡Descubre como Kampanee Negocios Negocios puede ayudarte<br></br>
                    a impulsar tu exito!</p>
                <div className="dueñobotones">
                    <GooglePlayButton />
                    <button className="kampanee-btn">Explorar ahora</button>
                </div>
                <img id="celular" src={celular} alt="" />
            </div>

            <div className="descubre-kampanee">
                <div className="kampaneeicon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152" fill="none">
                        <g filter="url(#filter0_d_175_1390)">
                            <circle cx="76" cy="75" r="67" fill="white" />
                        </g>
                        <path d="M107.054 56.1375L104.109 59.0875L72.0696 94.2371L66.1155 100.777C64.6672 102.353 62.1085 102.307 60.7407 100.668L55.0923 93.8781L42.9588 79.3313C45.5658 78.1919 48.2371 77.8173 50.5704 77.8173C53.7889 77.8173 56.3958 78.5196 57.3292 78.9411C59.6625 79.9712 61.5936 81.6725 63.2028 83.6079L63.7821 84.3103L84.2192 61.8969C86.5043 59.3996 89.2561 57.3081 92.3941 55.9658C96.6263 54.1553 100.569 53.8431 107.038 56.1531L107.054 56.1375Z" fill="#FF7F00" />
                        <path d="M78.1685 44.7124V61.975L65.1017 76.319L65.0695 76.3502L64.1522 77.2711V44.7124H78.1685Z" fill="#1A1A1A" />
                        <path d="M109.564 105.288H91.9596C91.2033 105.288 90.4952 104.96 90.0125 104.398L79.7778 92.2238L89.5619 81.4854L109.564 105.288Z" fill="#1A1A1A" />
                        <defs>
                            <filter id="filter0_d_175_1390" x="0.38484" y="0.504811" width="151.23" height="151.23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1.11997" />
                                <feGaussianBlur stdDeviation="4.30758" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.368627 0 0 0 0 0.368627 0 0 0 0.12 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1390" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_1390" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <h1 className="descubretitle">
                    Descubre todo lo que <span style={{ color: '#FF8000' }}> <br></br>Kampanee</span> tiene para ti
                </h1>
                <div className="gestionventas">
                    <h4>Gestiona tus ventas</h4>
                    <p>Brindale una mejor <br></br> experiencia de compra a tus <br></br>clientes.</p>
                </div>
                <div className="inventarioadmin">
                    <h4>Administra tu inventario</h4>
                    <p>Registra tus productos en tu<br></br> inventario y optimiza tus costos.</p>
                </div>
                <div className="controlnegocio">
                    <h4>Ten el control de tu negocio</h4>
                    <p>Controla el estado de tus ventas,<br></br> gastos y del capital invertido en tu<br></br>negocio.</p>
                </div>
            </div>



            <div className="funcionakampanee">
                <h1 className="funcionatittle">
                    ¿Cómo funciona <span style={{ color: '#FF8000' }}>Kampanee?</span>
                </h1>
                <h4 className="administra" style={{ color: '#FF8000' }}>1. Administra tu negocio</h4>
                <p className="administraparrafo"style={{ color: '#565656' }}>¡Kampanee permite a los negocios digitalizar sus finanzas.<br></br>
                    Administrar ventas, gastos, deudas, inventario, balance y mucho<br></br>
                    más!</p>
                <h4>2. Muéstrate a potenciales clientes</h4>
                <h4>3. Toma mejores decisiones</h4>
                <img className="telefonos" src={telefonos} alt="" />


            </div>
        </>
    )
}


