var typejeep= prompt("Entre el tipo de Jeep Sport, SportS o Havane");
// Saber si debe o no operar de acuerdo a lo seleccionado
var init_calc = false;
// Valor total
var total_value = 0;
// Plazo
var plazo = 0;
// Impuesto
var impuesto = 0;
// Valor Cuota
var valor_cuota = 0;
// Valor Base
var valor_base = 0;
// Aca seria mejor trabajar con un switch, si quiere usar if quite el comentario del código de abajo
switch(typejeep.toLowerCase()) {
    case 'sport':
        total_value += 33290;
        init_calc = true;
        break;
    case 'sports':
        total_value += 37240;
        init_calc = true;
        break;
    case 'havane':
        total_value += 39235;
        init_calc = true;
        break;
    default:
        document.write("Ingrese un modelo correcto para operar");
        document.write("<br>");

if(init_calc) {
    // Solicita número de cuotas, si el valor es diferente al solicitado envía 0, de una vez lo transformo a entero con paseInt
    var numero_cuotas = parseInt(prompt("Ingrese el plazo: 24, 48, 60 o 84 (Si no toma un valor valido, el plazo será 0"));
    if((numero_cuotas === 24) || (numero_cuotas === 48) || (numero_cuotas === 60) || (numero_cuotas === 80)){
        plazo = numero_cuotas;
    }
    // Solicita color, si es rojo o verde agrega $1.399
    var color = prompt("Escoja el color del vehículo");
    if((color.toLowerCase() === 'rojo') || (color.toLowerCase() === 'verde')){
        total_value += 1399;
    }
    // Solicita transmisión, si es automática se agrega 1500 ó si es 8 velocidades se agrega 2400
    transmission= prompt("Ingrese el tipo de transmisión: Manual , Automática o 8 Velocidades");
    if(transmission.toLowerCase() === 'Automática') {
        total_value += 1500;
    }
    else if(transmission.toLowerCase() === 'Automática') {
        total_value += 2400;
    }
}
// Calculos
// Tomo el valor base solo para mostrarlo
valor_base = total_value;
// Si el impuesto es al total y después divide la operación por los meses
impuesto = total_value*0.15;
total_value += impuesto;
// Si la cuota seleccionada es valida opera la cuota si no es 0
if(plazo > 0) {
    valor_cuota = total_value/plazo;

document.write("Modelo del auto: "+typejeep);
document.write("<br>");
document.write("Color del auto: "+color);
document.write("<br>");
document.write("Transmisión del auto: "+transmission);
document.write("<br>");
document.write("El valor base de la operación es: $"+valor_base);
document.write("<br>");
document.write("El valor del impuesto es: $"+impuesto);
document.write("<br>");
document.write("El valor total de la operación es: $"+total_value);
document.write("<br>");
document.write("Cantidad de cuotas: "+plazo);
document.write("<br>");
document.write("Valor de la cuota: $"+valor_cuota);
document.write("<br>")