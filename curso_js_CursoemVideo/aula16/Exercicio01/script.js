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
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
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
        let tot = valores.length
        let $soma = ''
        let $maior = ''
        let $menor = ''
        let $media = ''
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números adicionados é ${tot}.</p>`
        res.innerHTML += `<p>O maior número é ${maiorN($maior)}.</p>` 
        res.innerHTML += `<p>O menor número é ${menorN($menor)}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma($soma)}.</p>`
        res.innerHTML += `<p>A média entre os valores é ${media($media)}</p>`
    
    }
}

function soma($total) {
    var $total = 0
    for (let c = 0; c < valores.length; c++) {
        $total += valores[c]
    }
    return $total
}

function maiorN ($m) {
    var $m = valores[0]
    for (const pos in valores) {
        if (valores[pos] > $m) {
            $m = valores[pos] 
        } 
    }
    return $m
}

function menorN ($me) {
    var $me = valores[0]
    for (let pos in valores) {
        if (valores[pos] < $me){
        $me = valores[pos]
        }
    }
    return $me
}

function media ($med){
   var $med = 0
   let s = 0
   $med = soma(s)/valores.length
   return $med
}

function limparlista() {
    while(valores.length) {
        valores.pop();
     }
    res.innerHTML = ''
    lista.innerHTML = ''
}