import React, {Fragment, useState} from "react";
import Header from "./componentes/Header.js";
import Formulario from "./componentes/Formulario.js";
import Mensaje from "./componentes/Mensaje.js";

function App() {
  // usestate retorna 2 valores,el primero es una variable que va a contener el valor
  // el otro es una función que va a estar interactuando con ese valor y guardando ese state que estamos 
  // usando o creando en cuestión
  const [cantidad, guardarCantidad] = useState(0) // en este caso el valor inicial del state es number 0
  // realmente sirve sin poner Fragment, lo coloco por la ciencia

  const [plazo,guardarPlazo] = useState('')

  const [total,guardarTotal] = useState(0);


  return (
      <Fragment> 
      <Header/>
      <div className="container">
      <Formulario 
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
      />
        <div className="mensajes">
          <Mensaje/>
        </div>
      </div>
      </Fragment>
  );
}

export default App;
