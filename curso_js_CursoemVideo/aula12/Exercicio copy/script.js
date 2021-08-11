function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano || fano.value == 0) {
        alert('[ERRO] Verifique os valores e tente novamente')
    } else {
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero = ''
            if(fsex[0].checked) {
                genero = 'Homem'
            } else {
                genero = 'Mulher'
            }
    }
}