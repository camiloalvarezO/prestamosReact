export function calcularCotizacion(cantidad,plazo){

    // 1 - 1000 = 25%
    // 1001 - 5000 = 20%
    // 5000 - 10000 = 15%
    // +10000 = 10%
    let totalCantidad = 0
    if(cantidad < 1000){
        totalCantidad = cantidad * .25;
    }
    console.log(totalCantidad);



    const total = totalCantidad + cantidad
    console.log(total);
    
}