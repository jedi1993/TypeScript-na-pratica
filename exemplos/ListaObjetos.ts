const pessoa = {
    nome:'Mariana',
    idade:28,
    profissao:'Desenvolvedora'
}

pessoa.idade = 20

const andre: {nome:string, idade:number,profissao:string} = {
    nome:'André',
    idade:25,
    profissao:'Pintor'
}

const paula: {nome:string, idade:number,profissao:string} = {
    nome:'Paula',
    idade:25,
    profissao:'Desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:Profissao
}

interface Estudante extends Pessoa{
    materiais: string[]
}

const vanessa: Pessoa = {
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.Desenvolvedora
}

const jessica:Estudante={
    nome:'Jéssica',
    idade:28,
    profissao:Profissao.Desenvolvedora,
    materiais:['Matemática Discreta','Programação']
}

const monica:Estudante={
    nome:'Mônica',
    idade:28,
    materiais:['Gramática','Geografia']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item)
    }
}

listar(monica.materiais)