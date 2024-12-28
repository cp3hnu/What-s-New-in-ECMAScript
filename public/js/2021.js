console.log('************ECMA2021************')

console.log('**String.prototype.replaceAll**')
const p = 'I saw a saw saw a saw';
console.log(p.replaceAll('saw', 'see'));
const regex = /saw/g;
console.log(p.replaceAll(regex, 'listen'));

const str = 'table football, foosball';
const regex1 = /foo(?<name>[a-z]+)/g;
console.log(str.replaceAll(regex1, 'basket($<name>)'));

const replacedStr = str.replaceAll(regex1, (matched, p1, offset, input, groups) => {
  console.log(matched,p1, offset, groups)
  return `basket(${p1})`
})
console.log(replacedStr);


console.log('**Promise.any**')
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, 'slow'));
const promises = [promise1, promise2, promise3];
Promise.any(promises).then((value) => console.log(value)); // quick

const promise4 = Promise.reject(0);
const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'quick'));
const promise6 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'slow'));

const promises7 = [promise4, promise5, promise6];

Promise.any(promises7)
  .catch((error) => {
    console.log(error)
    console.log(error.errors)
  }); 

