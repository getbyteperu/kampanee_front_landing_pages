import React, { useState } from "react";
import Usuario from "./Usuario";
import Negocio from "./Negocio";

function Base() {
  const [componenteActual, setComponenteActual] = useState(null);

  const mostrarComponente = (nombreComponente) => {
    if (nombreComponente === "Usuario") {
      setComponenteActual(<Usuario />);
    } else if (nombreComponente === "Negocio") {
      setComponenteActual(<Negocio />);
    }
  };

  return (
    <div>
      <h1 className="text">PÁGINA DE INICIO</h1>
      <div>
        <button className="boton" onClick={() => mostrarComponente("Usuario")}>
          Usuario
        </button>
        <button className="boton" onClick={() => mostrarComponente("Negocio")}>
          Negocio
        </button>
      </div>
      {componenteActual}
    </div>
  );
}

export default Base;
