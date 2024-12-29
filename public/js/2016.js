function arrayIncludes() {
  const pets = ['cat', 'dog', 'bat']
  console.log(pets.includes('cat')) // true
  console.log(pets.includes('at')) // false
}

function exponentiationOperator() {
  console.log(2 ** 2) // 4
  console.log(2 ** 10) // 1024
  // 右结合
  console.log(2 ** 2 ** 3) // 256, 2 ** (2 ** 3)，即2的8次方
  // 负数
  console.log(-(2 ** 2)) // -4
  console.log((-2) ** 2) // 4

  // 下面这个报错
  // console.log(-2 ** 2)
}

window.es2016 = {
  arrayIncludes,
  exponentiationOperator
}