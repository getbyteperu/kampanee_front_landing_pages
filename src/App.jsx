import React, { useState } from 'react';
import Negocio from "./componentes/Negocio";
import Usuario from "./componentes/Usuario";

function App() {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const cambiarComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };
  return (
    <div>
      <button onClick={cambiarComponente}>
        Cambiar Componente
      </button>
      {mostrarComponente ? <Usuario /> : <Negocio />}

    </div>
  );
}

export default App;
