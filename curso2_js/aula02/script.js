/*var vetor = ['hoje', 'amanha', 'depois',2,3,4]

for (let i in vetor){
    console.log(vetor[i])
}

for (let indice of vetor){
    console.log(indice)
}*/
var res = fizzBuzz(7)
console.log(res)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        console.log('Não é um número')
    } else if (entrada%5 == 0 && entrada%3 == 0) {
       return console.log('FizzBuzz')
    } else if (entrada%3 == 0) {
       return console.log('Fizz')
    } else if (entrada%5 == 0) {
        return console.log('Buzz')  
    } else {
        console.log(entrada)
    }
}