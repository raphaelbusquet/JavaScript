let pessoa = {nome:'Raphael', idade:26, peso:85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

// console.log(typeof(pessoa)) // Mostra o tipo

pessoa.engordar(10)
console.log(`${pessoa.nome} tem ${pessoa.peso} kilos.`)