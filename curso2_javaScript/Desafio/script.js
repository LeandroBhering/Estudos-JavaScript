var nomeConvidado = document.getElementById('convidado')
var nomeConvidou = document.getElementById('quemConvidou')
var resposta = document.getElementById('resposta')
const lista = [
    {convidado: 'camila', convidou: 'leandro'},
    {convidado: 'mikhael', convidou: 'leandro'},
    {convidado: 'laura', convidou: 'leandro'},
    {convidado: 'jacqueline', convidou: 'leandro'},
    {convidado: 'maria eduarda', convidou: 'leandro'},
    {convidado: 'rodolfo', convidou: 'camila'},
    {convidado: 'ricardo', convidou: 'camila'},
]

function verificar(){
    if ((lista.forEach(() => nomeConvidou.value == lista.convidou)  && (lista.forEach(() => nomeConvidado.value == lista.convidado)))) {
        resposta.innerHTML = 'Parabéns! Você está na lista de convidados!'   
    } else {
        resposta.innerHTML = 'Ops! Parece que você não foi convidado para a festa'
    }
    
}