import React from "react";

const Resultado = ({cantidad,total,plazo}) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>Total a pagar: $ {(total.toFixed(2))}</p>
        <p>plazo a pagar: {plazo} Meses</p>
        <p>Cantidad prestada: $ {cantidad}</p>
        <p>Pago mensualmente de:$ { (cantidad / plazo).toFixed(2)} </p>
    </div>
);
 
export default Resultado;