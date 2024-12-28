console.log('************ECMA2017************')

console.log('**Object.values**')
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1))


console.log('**Object.entries**')
console.log(Object.entries(object1))


console.log('**String.prototype.padStart**')
console.log('abc'.padStart(10));         // "       abc"
console.log('abc'.padStart(8, "0"));     // "00000abc"
console.log('abc'.padStart(6,"123465"))  // "123abc"
console.log('abc'.padStart(1));          // "abc"
console.log('abc'.padStart(10, "foo"))   // "foofoofabc"


console.log('**String.prototype.padEnd**')
console.log('abc'.padEnd(10));         // "       abc"
console.log('abc'.padEnd(8, "0"));     // "00000abc"
console.log('abc'.padEnd(6,"123465"))  // "123abc"
console.log('abc'.padEnd(1));          // "abc"
console.log('abc'.padEnd(10, "foo"))   // "foofoofabc"


console.log('**Object.getOwnPropertyDescriptors**')
console.log(Object.getOwnPropertyDescriptors(object1))


// async function
function defer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1024)
    }, 2000)
  })
}

async function asyncFunc() {
  const result = await defer()
  console.log('**async function**')
  console.log('result = ', result)
}

asyncFunc()