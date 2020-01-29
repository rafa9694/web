const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: i,idade:n} = pessoa
console.log(i,n)

const {sobrenome,bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco:{logradouro ,numero,cep}} = pessoa
console.log(logradouro,numero,cep)