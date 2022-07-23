"use strict";
function somaValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somaValoresNumericos(4, 3, aoQuadrado));
function apenasPrintaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericos(4, 3, dividirPorEleMesmo));
