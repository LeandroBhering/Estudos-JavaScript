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
    {convidado: 'ricardo', convidou: 'camila'}
]


function verificar(){
    for (let i = 0; i <= lista.length; i++){
        if (nomeConvidou.value == lista[i].convidou) {
            return resposta.innerHTML = 'Parabéns! Você está na lista de convidados!' 
        }            
    }
            resposta.innerHTML = 'Ops! Parece que você não foi convidado para a festa'
}
