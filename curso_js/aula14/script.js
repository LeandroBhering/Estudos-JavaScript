function contar() {
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.querySelector('#res')
    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        alert('[ERRO] Verifique os valores e tente novamente')
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        for(var cont = inicio; cont <= fim; cont++){
            res.innerHTML = `${cont}`
        }
    }
    
    
}

