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


// Minha solução
var filme = {
    titulo: 'Resgate do Soldade Ryan',
    ano: 1994,
    diretor: 'Steven Spilberg',
    personagem: 'Cap Miller'
}

exibirPropiedades(filme)

function exibirPropriedades(obj) {
    
}