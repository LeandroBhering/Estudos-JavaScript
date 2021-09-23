var nomeConvidado = document.getElementById('convidado')
var nomeConvidou = document.getElementById('quemConvidou')
var resposta = document.getElementById('resposta')
/*const lista = [
    {convidado: 'camila', convidou: 'leandro'},
    {convidado: 'mikhael', convidou: 'leandro'},
    {convidado: 'laura', convidou: 'leandro'},
    {convidado: 'jacqueline', convidou: 'leandro'},
    {convidado: 'maria eduarda', convidou: 'leandro'},
    {convidado: 'rodolfo', convidou: 'camila'},
    {convidado: 'ricardo', convidou: 'camila'}
]*/
const listaLeandro = ['camila','mikhael','laura','jacqueline','maria eduarda']
const listaCamila = ['ricardo','rodolfo']


function verificar(){
   if ((nomeConvidou.value == 'leandro') && (listaLeandro.includes(nomeConvidado.value))){
        resposta.innerHTML = 'Parabéns! Você foi convidado(a) para a festa.'
   } else if ((nomeConvidou.value == 'camila') && (listaCamila.includes(nomeConvidado.value))){
        resposta.innerHTML = 'Parabéns! Você foi convidado(a) para a festa.'
   } else {
       resposta.innerHTML = 'Ops! Parece que você não foi convidado(a)'
   }
}
