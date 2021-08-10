var num = document.querySelector('#txtnum')
var res = document.querySelector('#res')
var lista = document.querySelector('#flista')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function AddNum(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function verificar(){
    if (valores.length == 0) {
        alert('[ERRO] Não existe valores adicionados')
    } else {
        res.innerHTML = `A soma dos valores é ${soma}`
    }
}

function soma() {
    var total = 0
    for (let c = 0; c < valores.length; c++) {
        total += valores[c]
    }
    res.innerHTML = `A soma dos valores é ${total}`
}

