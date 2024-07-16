import React, {Fragment, useState} from "react";
import Header from "./componentes/Header.js";
import Formulario from "./componentes/Formulario.js";
import Mensaje from "./componentes/Mensaje.js";
import Resultado from "./componentes/Resultado.js";
import Spinner from "./componentes/Spinner.js";

function App() {
  // usestate retorna 2 valores,el primero es una variable que va a contener el valor
  // el otro es una función que va a estar interactuando con ese valor y guardando ese state que estamos 
  // usando o creando en cuestión
  const [cantidad, guardarCantidad] = useState(0) // en este caso el valor inicial del state es number 0
  // realmente sirve sin poner Fragment, lo coloco por la ciencia

  const [plazo,guardarPlazo] = useState('')

  const [total,guardarTotal] = useState(0);
  const [cargando,guardarCargando] = useState(false)

  let componente;
  if(cargando){
    componente = <Spinner/>
  } else if(total === 0){
    componente = <Mensaje/>
  } else {
    componente = <Resultado
        total={total}
        cantidad={cantidad}
        plazo={plazo}
    />
  }

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
        guardarCargando ={guardarCargando}
      />
        <div className="mensajes">
          {componente}
        </div>
      </div>
      </Fragment>
  );
}

export default App;
