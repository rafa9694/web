function rand({min = 0, max = 1000}){
    const valor  = 1 * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50 ,min :40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
console.log(rand())
