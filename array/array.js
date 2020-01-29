console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'

aprovados.sort()
delete aprovados[1]


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2,'elemento1','salve2')
console.log(aprovados)