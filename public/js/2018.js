console.log('************ECMA2018************')

console.log('**Template literals revision**')
function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}
console.log(latex`\unicode`)
// 下面这个会抛出 SyntaxError
//let bad = `bad escape sequence: \unicode`


console.log('**Rest/Spread Properties**')
const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
console.log(a)    // 10
console.log(a)    // 20
console.log(rest) // {c: 30, d: 40}

const obj = {
  c: 30,
  d: 40
}
const obj1 = {
  a: 10, 
  b: 20,
  ...obj
}
console.log(obj1) // {a: 10, b: 20, c: 30, d: 40}


console.log('**Regular expression**')
console.log('/s flag')
console.log(/^.$/.test('\n')) // false
console.log(/^.$/s.test('\n')) // true


console.log('**Named capture groups**')
const eventDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const matchedObject = eventDate.exec('2019-04-03');
console.log(matchedObject.groups.year);  // 2019
console.log(matchedObject.groups.month); // 04
console.log(matchedObject.groups.day);   // 03


console.log('**Unicode Property Escapes**')
const result = /\p{White_Space}+/u.test('3 empanadas');
console.log(result) // Prints true

const regexGreekSymbol = /\p{Script=Greek}/u;
console.log(regexGreekSymbol.test('π'));


// Promise.prototype.finally
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'))
    }
  });
}

checkMail()
  .then((mail) => {
    console.log('**Promise.prototype.finally**')
    console.log(mail);
  })
  .catch((err) => {
    console.log('**Promise.prototype.finally**')
    console.error(err)
  })
  .finally(() => {
    console.log('Experiment completed')
  });

// Asynchronous Iteration
class AsynchronousIteration {
  constructor(max) {
    this.max = max
  }
  [Symbol.asyncIterator]() {
    const max = this.max
    let count = 0
    return {
      next() {
        if (count <= max) {
          return new Promise((resolve) => {
            resolve({value: count++, done: false})
          }, 1000)
        } else {
          return new Promise((resolve) => {
            resolve({value: count++, done: true})
          }, 1000)
        }
      }
    }
  }
}

async function testAsyncIteration() {
  const iterable = new AsynchronousIteration(5)
  for await (const count of iterable) {
    console.log(count)
  }
}

setTimeout(() => {
  console.log('**Asynchronous Iteration**')
  testAsyncIteration()
}, 1000)
