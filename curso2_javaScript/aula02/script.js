

















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

