let valorAny: any

valorAny = 4
valorAny = 'Olá'
valorAny = true

let valorString:string = 'Teste'
valorString = valorAny
let valorString2 = 'textão'
valorString2 = valorAny

function somarStrings(string1: string, string2:string){
    console.log(string1 + string2)
}

somarStrings('olá',' como vai?')