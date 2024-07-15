export function calcularCotizacion(cantidad,plazo){

    // 1 - 1000 = 25%
    // 1001 - 5000 = 20%
    // 5000 - 10000 = 15%
    // +10000 = 10%
    console.log(cantidad);
    let totalCantidad;
    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    } else if (cantidad >= 1001 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    } else if (cantidad >= 5001 && cantidad <= 10000 ){
        totalCantidad = cantidad * .15;
    } else if (cantidad >= 10001){
        totalCantidad = cantidad * .10;
    }
    console.log(`por el prestamo: ${totalCantidad}`);

    // interes a pagar segun el plazo
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%
    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .1;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24: 
            totalPlazo = cantidad * .20;
            break;
        default:
            break;
    }

    console.log(`por el plazo: ${totalPlazo}`);

    return totalCantidad + totalPlazo + cantidad;
    // const total = totalCantidad + cantidad
    // console.log(total);
    
}