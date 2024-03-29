/*
var idade = prompt('Qual a sua idade?')
if (idade >= 18) {
    alert('Você é um adulto')
} else {
    alert('Você é menor de idade')
}
*/


/*
const numeros = [1,2,3,4,5]
console.log(numeros)

const combinado = numeros.join('-')
console.log(combinado)

let frase = 'Essa é uma frase de teste'
console.log(frase)
let separada = frase.split(' ')
console.log(separada)

console.log(separada.join('-'))
*/


/*
// Iterando um ARRAY
const numeros = [1,2,3,4,5,6]
console.log(numeros)
// - Situação 1 -
var lista = []
for (const numero of numeros) {
    lista.push(numero)
}
console.log(lista)
// - Situação 2 -
numeros.forEach((numero, indice) => console.log(numero, indice))
*/


/*
// Operador SPREAD
const primeiro = [1,2,3]
const segundo = [4,5,6]
console.log(primeiro,segundo)
// Juntando os dois arrays em um só com Spred (...)
const combinado = [...primeiro,'a',...segundo,'#']
console.log(combinado)
// Clonando um array com spread
const clonado = [...combinado]
console.log(clonado)
*/



/*
// Combinando e cortando arrays
const primeiro = [1,2,3,4]
const segundo = [5,6,7,8]
console.log(primeiro, segundo)
// Juntando os dois Arrays em um só.
const combinado = primeiro.concat(segundo)
console.log(combinado)
// Dividindo um Arrays
const dividir = combinado.slice(0,4) // Vai pegar os elementos do indice 0 até indice 3
console.log(dividir)
*/



/*
// Esvaziando um Array
let numeros = [1,2,3,4,5,6]
let outros = numeros
console.log(numeros)
console.log(outros)
// - Solução 1 -
// console.log(numeros = [])
// console.log(numeros)
// console.log(outros)
// - Solução 2 -
console.log(numeros.length = 0)
console.log(numeros)
console.log(outros)
// - Solução 3 -
// console.log(numeros.splice(0,numeros.length))
// console.log(numeros)
// console.log(outros)
// - Solução 4 -
/*for (let i = numeros.length; i > 0; i--){
    console.log(numeros.pop(numeros.length))
}
console.log(numeros)
console.log(outros)*/




/*
// Removendo elementos de um Array

const numeros = [1,2,3,4,5,6]
console.log(numeros)

//Final
console.log(numeros.pop())
console.log(numeros)
// Inicio
console.log(numeros.shift())
console.log(numeros)
// Meio
console.log(numeros.splice(3))
console.log(numeros)
*/



/*
// Arrow Functions

let nome = 'abe'
const marcas = [
    {id:1, nome:'abe'},
    {id:2, nome:'abelha'},
    {id:3, nome:'alha'},
    {id:4, nome:'eha'},
    {id:5, nome:'abha'}
]
console.log(marcas)

// Retorna um elemento dentro de um array de objetos

console.log(marcas.find(marca => marca.nome === nome))
*/


/*
// Encontrando elementos(primitivos) em um Array
const numeros = [1,2,1,3,4,5,6,5]
console.log(numeros)
 
// retorna o indice do elemento Ex de elemento (1)
console.log(numeros.indexOf(1))

// se não há o elemento retorna -1 Ex de elemento (7) e ('1')
console.log(numeros.indexOf(7))
console.log(numeros.indexOf('1'))

// Como descobrir se há um elemento Ex(3) dentro de uma Array
console.log(numeros.indexOf(3) !== -1)
console.log(numeros.includes(3)) // Mais simples

// ultimo indice que o elemento Ex(5) se encontra
console.log(numeros.lastIndexOf(5)) 


// Encontrando elementos(Tipos de referência) em um Array de objetos

let nome = 'abha'
const marcas = [
    {id:1, nome:'abe'},
    {id:2, nome:'abelha'},
    {id:3, nome:'alha'},
    {id:4, nome:'eha'},
    {id:5, nome:'abha'}
]
console.log(marcas)

// Retorna um elemento dentro de um array de objetos
const marca = marcas.find(function(marca){
    return marca.nome === nome
}) 
console.log(marca)
*/



/*
// Inserindo elementos em uma Array
const numeros = [1,2,3]
// Inicio
numeros.unshift(0)
console.log(numeros)
// Meio
numeros.splice(1,0,'a')
console.log(numeros)
// Final
numeros.push(4,5)
console.log(numeros)
*/


/*
let faixaDePreco = [
    {tooltip: 'Até R$700', min:0, max: 700},
    {tooltip: 'De R$700 a R$1000', min:700, max: 1000},
    {tooltip: 'De R$1000 ou mais', min:1000, max: 9999999}
]

console.log(faixaDePreco)

// Segunda Opção (Factory Function)

function faixadePreco(tooltip, min,max) {
    return {
        tooltip,
        min,
        max
    }
}

let faixa = [
    faixadePreco('até 700',0,700),
    faixadePreco('de 700 ate 1000', 700,1000)
]
console.log(faixa)

// Terceira Opção (Constructor Fuction)

function faixadepreco(tooltip,min,max) {
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let faixa2 = [
    new faixadepreco('Até 700', 0, 700),
    new faixadepreco('De 700 a 1000', 700, 1000)
]

console.log(faixa2)
*/




/*
function Postagem(titulo, mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c')

console.log(postagem)
*/


/*
let postagem = {
    titulo: 'Nova',
    mensagem: 'Alo marciano estou aqui',
    autor: 'Leandro Bhering',
    visualizacoes:120,
    comentarios: [
     {autor: 'jubileu', mensagem:'Que merda é essa'},
     {autor: 'Leopooldo', mensagem: 'Wtf is this'}
    ],
    estaAoVivo: true
}

console.log(postagem)
*/


/*
function endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco('a','b','c')
const endereco2 = new endereco('a','b','c')

function saoIguais(endereco1, endereco2) {
    if ((endereco1.rua === endereco2.rua) && (endereco1.cidade === endereco2.cidade) && (endereco1.cep === endereco2.cep)) {
        return true
    }
    return console.log(false)
}

function temEnderecoMemoriaIguais (endereco1, endereco2) {
    return endereco1 === endereco2
}

console.log(saoIguais(endereco1,endereco2))
console.log(temEnderecoMemoriaIguais(endereco1,endereco2))
*/



/*
var endereco = {
    rua: 'Boteco cardoso',
    cidade: 'São paulo',
    cep: '03716-020'
}

function exibirEndereco(endereco) {
    for (const key in endereco) {
        console.log(key,endereco[key])
    }
}

exibirEndereco(endereco)
*/



/*
var nome = 'Marciano'
var questao = '3 divido por 4'

function resultado(n1,n2){
    return n1/n2
}


const mensagem = `
Olá ${nome}!

Eu estou aqui mais uma vez para te dizer o resultado.
Sua questão é a ${questao}.
O resultado para sua questão é:
${resultado(3,4)}

Obrigado!
Leandro
`

console.log(mensagem)
*/
 
/*
// função Math

console.log(Math.random())
console.log(Math.max(1,25,10,34,2,8,))
console.log(Math.min(25,125,320,1000,2))
console.log(Math.sqrt(25))
console.log(Math.abs(543))
console.log(Math.trunc(21.523))
*/


/*
var infTeste = {
    info: 1,
    info2: 2,
    info3: 3
}

console.log(infTeste)

// Copiar um objeto

const infTeste2 = Object.assign({
    info4: 4
},infTeste)

console.log(infTeste2)

const infTeste3 = {...infTeste}

console.log(infTeste3)
*/


/*var objeto = {
    tipo: 'Bola',
    forma: 'redonda'
}

objeto.tamanho = 'Grande'
objeto.cor= 'Branco'
objeto.algumaFuncao = function () {
    console.log('Alguma coisa aqui')
}

delete objeto.algumaFuncao
delete objeto.cor

console.log(objeto)
*/


/*function cadastroPessoa(nome, sexo, idade, cpf) {
    this.nome = nome,
    this.sexo = sexo,
    this.idade = idade,
    this.cpf = cpf
}

var pessoas = [
    new cadastroPessoa('Leandro','Masculino', 27, 40093820828),
    new cadastroPessoa('camila','Feminino', 30, 11122233344)
]

console.log(pessoas)
*/


/*function cadastroPessoa(nome, sexo, idade, cpf) {
    return{
        nome,
        sexo,
        idade,
        cpf,
    }
}
var pessoa = [
    cadastroPessoa('Leandro', 'masculino', 27, 40093820828), cadastroPessoa('Camila','feminino',30, 50120365985),
    cadastroPessoa('Jacqueline','feminino',50, 40152132652)
]

console.log(pessoa)
*/

/*
listaNum = [12, 31, 3, 1, 54, 83,71]

function numerosPrimos(lista) {
    for (const numeros of lista) {
        if ((numeros %2 == 1) && (numeros / numeros == 1)) {
            console.log(numeros)          
        }
    }
}

numerosPrimos(listaNum)
*/

/*
var vetor = ['hoje', 'amanha', 'depois',2,3,4]

for (let i in vetor){
    console.log(vetor[i])
}

for (let indice of vetor){
    console.log(indice)
}
*/


/*
var res = fizzBuzz(7)
console.log(res)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
       return 'Não é um número'
    } else if (entrada%5 === 0 && entrada%3 === 0) {
       return 'FizzBuzz'
    } else if (entrada%3 === 0) {
       return 'Fizz'
    } else if (entrada%5 === 0) {
        return 'Buzz'  
    } else {
        return (entrada)
    }
}
*/

/*
// minha solução 

verificarVelocidade(50)

function verificarVelocidade (velocidade){
        var pontos = 0
        if (velocidade <= 70) {
            console.log('ok')
        } else {
        for (let c = velocidade; c > 70; c-=5 ){
          pontos++
        }
        if (pontos > 12) {
            console.log('carteira suspensa')
        }else if (pontos <= 12){
            console.log(pontos)
        }
    }
} 

// solução do professor 

verificarVelocidade(140)

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70
    const kmPorPonto = 5
    if (velocidade <= velocidadeMax) {
        console.log('ok')
    } else {
        const pontos = Math.floor(((velocidade - velocidadeMax)/kmPorPonto))
        if (pontos > 12) {
            console.log('Carteira suspensa')
        } else {
            console.log(pontos)
        }     
    }
}
*/

/*
// Minha Solução

exibirTipo (10)

function exibirTipo (limite){
    for (let i = 1; i <= limite; i++)
        if (i%2 == 0) {
            console.log(i + ' PAR')
        } else {
            console.log(i + ' IMPAR')
        }
}   

// Solução do Professor - Igual a minha
*/

/*
// Minha solução
var filme = {
    titulo: 'Resgate do Soldade Ryan',
    ano: 1994,
    diretor: 'Steven Spilberg',
    personagem: 'Cap Miller'
}

exibirPropriedades(filme)

function exibirPropriedades(obj) {
    for (prop in obj){
    if (typeof obj[prop] === 'string') {
        console.log(prop, obj[prop]) 
    }
  }
}
*/

/*
somar(52)

function somar(limite) {
    var M3 = 0
    var M5 = 0
    for (i = 0; i <= limite; i++){
        if (i%3 === 0)
            M3 += i
        if (i%5 === 0) 
            M5 += i  
    }
    console.log(M5+M3)
}
*/

/*
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [100,100,80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas) {
    var soma = 0
    for (let nota of notas){
        soma += nota
    }
    var media = soma/(notas.length)
    
    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
}
*/

/*
exibirAsteriscos(10)

function exibirAsteriscos(linhas) {
//   let ast = ''
//  for(let i = 1; i <= linhas; i++){
//        ast += '*'
//        console.log(ast)
//    }
    for (let linha = 1; linha <= linhas; linha++){
        let ast = ''
        for (let i = 0; i < linha;i++){
        ast += '*'
        }
        console.log(ast)
    }
}
*/

