function somaValoresNumericos(numero1: number, numero2:number,callback:(numero:number)=> number):number{
    let resultado = numero1 + numero2
    return callback(resultado)

}

function aoQuadrado(numero:number):number{
    return numero * numero
}

console.log(somaValoresNumericos(4,3,aoQuadrado))
function apenasPrintaValoresNumericos(numero1:number,numero2:number){
    console.log(numero1 + numero2)
}

function dividirPorEleMesmo(numero:number):number{
    return numero / numero
}
console.log(somaValoresNumericos(4,3,dividirPorEleMesmo))
