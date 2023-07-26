console.log('************ECMA2020************')

console.log('**Optional Chaining**')
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
};

// 对象
console.log(adventurer.dog?.name); // undefined

// 方法
console.log(adventurer.someNonExistentMethod?.()); // undefined

//数组
console.log(adventurer.list?.[0]); // undefined


console.log('**Nullish coalescing Operator**')
const myText = '';
const otherText = null;

const preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // ''

const neighborhood = otherText ?? 'Hi neighborhood';
console.log(neighborhood); // 'Hi neighborhood'

const notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world


console.log('**String.prototype.matchAll**')
const regexp = new RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}


console.log('**globalThis**')
if (globalThis === window){
  console.log('browser')
}


console.log('**import.meta**')
console.log(import.meta);


console.log('**Promise.allSettled**')
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result)));