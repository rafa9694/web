const produto = [
    { nome: 'Notebook', preco:2499 , fragil :true},
    { nome: 'iPadr pro', preco:4199 , fragil : false},
]

console.log(produto.filter(function (p){
    return p.preco > 2400 && p.fragil
}))