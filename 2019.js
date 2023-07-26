import { flat } from './utils.js'

console.log('************ECMA2019************')

console.log('**Array.prototype.flat**')
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());            // [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat());           // [0, 1, 2, [3, 4]]
console.log(arr2.flat(2));          // [0, 1, 2, 3, 4]
console.log(flat(arr2));            // [0, 1, 2, 3, 4]


console.log('**Array.prototype.flatMap**')
const arr3 = [1, 2, 3, 4];
console.log(arr3.flatMap(x => x * x)); // 1, 4, 9, 16


console.log('**String.prototype.trimStart and String.prototype.trimEnd**')
let str = '   foo  ';
console.log(str.length); // 8  
str = str.trimStart(); 
console.log(str.length); // 5 
str = str.trimEnd();
console.log(str.length); // 3  


console.log('**Object.fromEntries**')
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj = Object.fromEntries(entries);
console.log(obj); // { foo: "bar", baz: 42 }


console.log('**Symbol.prototype.description**')
console.log(Symbol("desc").description);     // "desc"
console.log(Symbol("desc").toString());     // "Symbol(desc)"
console.log(Symbol(22).description);        // "22"， 注意这里是字符串不是数字
console.log(Symbol.for('foo').description); // "foo"