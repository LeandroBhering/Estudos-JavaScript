let amigo = {
    nome:'leandro', 
    sexo:'M', 
    peso:70.50,
    engordar(p=0){
        this.peso += p 
    }
}
amigo.engordar(30)
console.log(`${amigo.nome} pesa ${amigo.peso}`)