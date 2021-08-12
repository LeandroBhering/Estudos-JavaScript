/*let nome = 'josé'   // Declarar 'let' quando usar escopo local
var idade = '20'    // Declarar 'var' quando usar para escopo global
const imultavel = 0 // Declarar 'const' quando a variável não vai sofrer alteração*/

var cadastro = {
    nome: ['leandro'],
    idade: 27,
    aprovacao: true
}

cadastro.nome.push('carol','laura','mikhael')

var $nome = 'Milena'

function adicionarNomes(fnome) {
    cadastro.nome.push(fnome)
}

adicionarNomes($nome)
console.log(cadastro)

