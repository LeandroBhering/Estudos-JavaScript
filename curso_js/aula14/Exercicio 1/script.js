function contar() {
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.querySelector('#res')
    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        alert('[ERRO] Verifique os valores e tente novamente')
    } else if(txtpasso.value.length == 0 || txtpasso.value == 0){
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = 1
        res.innerHTML = ''
        if (inicio > fim) {
            for(var cont=inicio; cont>=fim; cont-=passo){
                res.innerHTML += ` ${cont}`
            }
        } else { 
            for(var cont=inicio; cont<=fim; cont+=passo){
            res.innerHTML += ` ${cont}`
            }
        }
     }else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        res.innerHTML = ''
        if (inicio > fim){
            for(var cont=inicio; cont>=fim; cont-=passo){
                res.innerHTML += ` ${cont}`
            }
        } else {
            for(var cont=inicio; cont<=fim; cont+=passo){
                res.innerHTML += ` ${cont}`
            }
        }
       
    }
    
    
}

