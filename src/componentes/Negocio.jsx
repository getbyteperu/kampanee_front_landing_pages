import GooglePlayButton from "../componentes/GooglePlayButton"
import Logo from "../componentes/Logo"
import first from "../img/first.png"
import avion from "../img/avion.png"
import '../Style/Negocio.css'

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
        </>
    )
}
