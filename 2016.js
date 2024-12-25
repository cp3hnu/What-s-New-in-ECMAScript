console.log('************ECMA2016************')

console.log('**Array.prototype.includes**')
const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'))
console.log(pets.includes('at'))

console.log('**Exponentiation**')
console.log(2 ** 2)
console.log(2 ** 10)
// 右结合
console.log(2 ** 2 ** 3) // 2 ** (2 ** 3)，即2的8次方
console.log(-(2 ** 2))
console.log((-2) ** 2)

// 下面这个报错
//console.log(-2 ** 2)
