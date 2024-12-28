import { Counter, SubCounter } from './utils.js';
// import awaitData from './awaiting.js'

console.log('************ECMA2022************')
// Class Fields
console.log('**Class Fields**')

console.log('**Public class fields**')
const count = new Counter();
count.accessPublicField();

console.log('**Public static class fields**')
console.log(Counter.publicStaticField); 
console.log(Counter.publicStaticMethod());

console.log('**Private class features**')
count.accessPrivateField();
// 下面两行代码会报错
// console.log(count.#privateField);    
// console.log(count.#privateMethods());

console.log('**Private static class features**')
count.accessPrivateStaticField();
// 下面两行代码会报错
// console.log(Counter.#privateStaticField);    
// console.log(count.#privateStaticMethod());

console.log('**Inherit**')
const s = new SubCounter()
s.accessPublicField();
s.accessPrivateField();
console.log(SubCounter.publicStaticField); 
console.log(SubCounter.publicStaticMethod());


console.log('**Ergonomic brand checks for Private Fields**')
class C1 {
  #priv() {}
  static check(obj) {
    return #priv in obj;
  }
}
console.log(C1.check(new C1()))
console.log(C1.check(new Counter()))


console.log('**Class Static Initialization Block**')
class Translator {
  static translations = {
    yes: 'ja',
    no: 'nein',
    maybe: 'vielleicht',
  };
  static englishWords = [];
  static germanWords = [];
  static {
    for (const [english, german] of Object.entries(this.translations)) {
      this.englishWords.push(english);
      this.germanWords.push(german);
    }
  }
}
console.log(Translator.englishWords, Translator.germanWords)


console.log('**Object.hasOwn**')
const object1 = {
  prop: 'exists'
};

console.log(Object.hasOwn(object1, 'prop')); // true
console.log(Object.hasOwn(object1, 'prop1')); // false

const obj = Object.create(null)
// TypeError: obj.hasOwnProperty is not a function
// obj.hasOwnProperty("foo")
console.log(Object.hasOwn(obj, "foo"));
let object = {
  hasOwnProperty() {
    throw new Error("gotcha!")
  }
}
console.log(Object.hasOwn(object, "foo"));


console.log('**at**')
console.log([1,2,3,4,5].at(3)) 
console.log([1,2,3,4,5].at(-2))


console.log('**RegExp Match Indices**')
const matchObj = /(a+)(?<name>b+)/d.exec('aaaabb');
console.log("indices = ", matchObj.indices);
console.log("\nmatchObj = ", matchObj);


console.log('**Top-level await**');
console.log(awaitData + 10);