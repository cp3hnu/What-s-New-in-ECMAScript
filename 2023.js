console.log('************ECMA2023************')

console.log('**Array find from last**');
const array = [5, 12, 50, 130, 44];
const found1 = array.findLast((element) => element > 45);      // 130
const found2 = array.findLastIndex((element) => element > 45); // 3
console.log(found1);
console.log(found2);


console.log('**Change Array by Copy**');
const items = [1, 5, 3, 4, 2];
const reversedItems = items.toReversed();
const sortedItems = items.toSorted((a, b) => a - b);
const splicedItems = items.toSpliced(2, 0, 6);
const withItems = items.with(0, 10);
console.log(reversedItems); // [ 2, 4, 3, 5, 1 ]
console.log(sortedItems);   // [ 1, 2, 3, 4, 5 ]
console.log(splicedItems);  // [ 1, 5, 6, 3, 4, 2 ]
console.log(withItems);     // [ 10, 5, 3, 4, 2 ]
console.log(items);         // [ 1, 5, 3, 4, 2 ]


console.log('**Symbols as WeakMap keys**');
const weak = new WeakMap();
const key = Symbol('my ref');
const someObject = { a: 123 };
weak.set(key, someObject);
console.log(weak.get(key));
