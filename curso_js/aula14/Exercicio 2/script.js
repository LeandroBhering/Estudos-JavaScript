function gerarTabuada() {
    var txtn = document.querySelector('#txttab')
    var res = document.querySelector('#res')
    var c = 1
    var n = Number(txtn.value)
    res.innerHTML = ''
    while (c<10) {
        var resp = c*n
        res.innerHTML += `<br> ${c} x ${n} = ${resp}`
        c++
    }
}
