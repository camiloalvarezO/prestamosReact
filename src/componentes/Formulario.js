import React,{useState, Fragment} from "react";
import { calcularCotizacion } from "../helpers";
const Formulario = ({cantidad,guardarCantidad,plazo,guardarPlazo}) => {
    
    // hacemos un state para la cantidad del prestamo
    

    // const leerCantidad = (e) =>{
    //     console.log(e.target.value);
    // }

    const leerCantidad= e =>{
        guardarCantidad(parseInt(e.target.value))
    }
    // aqui comienza el codigo sin jodienda
    const [error,guardarError]= useState(false)
    // validamos que los campos no sean vacíos
    function calcularError(e){
        e.preventDefault();
        if (cantidad === 0 || plazo === '' ) {
            guardarError(true)
            setTimeout(() => {
               guardarError(false) 
            }, 3000);
            return;
        }

        //eliminar mensaje de error en caso de que seleccionó bien
        guardarError(false)
        console.log('legal');
        calcularCotizacion(cantidad,plazo)
    }


    return ( 
        <Fragment>
        <form
            onSubmit={calcularError}
            >
           
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000"
                    //   onChange={leerCantidad}
                    onChange={e =>guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ e => guardarPlazo(parseInt(e.target.value))}
                  >
                      <option value="" >Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width " 
                  />
              </div>
          </div>
  </form>

  {(error)?<p className="error">Todos los campos son obligatorios</p>: null || ""}
  </Fragment>
     );
}
 
export default Formulario;