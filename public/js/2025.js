function newSetMethods() {
  const aSet = new Set([1, 2, 3, 4, 5]);
  const bSet = new Set([2, 4, 6, 8, 10]);

  const unionSet = aSet.union(bSet);
  console.log(unionSet); // [1, 2, 3, 4, 5, 6, 8, 10]

  const intersectionSet = aSet.intersection(bSet);
  console.log(intersectionSet); // [2, 4]

  const differenceSet = aSet.difference(bSet);
  console.log(differenceSet); // [1, 3, 5]

  const symmetricDifferenceSet = aSet.symmetricDifference(bSet);
  console.log(symmetricDifferenceSet); // [1, 3, 5, 6, 8, 10]

  const isSubset1 = aSet.isSubsetOf(bSet);
  const isSubset2 = aSet.isSubsetOf(unionSet);
  console.log(isSubset1, isSubset2); // false, true

  const isSuperset1 = aSet.isSupersetOf(bSet);
  const isSuperset2 = unionSet.isSupersetOf(aSet);
  console.log(isSuperset1, isSuperset2); // false, true

  const isDisjointFrom1 = aSet.isDisjointFrom(bSet);
  const isDisjointFrom2 = aSet.isDisjointFrom(new Set([6, 7, 8, 9, 10]));
  console.log(isDisjointFrom1, isDisjointFrom2); // false, true
}

function iteratorHelpers() {
  function* naturals() {
    let i = 0;
    while (true) {
      yield i;
      i += 1;
    }
  }

  // map()
  console.log('-------------map()-------------');
  const mapRes = naturals().map((value) => {
    return value * value;
  });
  console.log(mapRes.next()); //  {value: 0, done: false};
  console.log(mapRes.next()); //  {value: 1, done: false};
  console.log(mapRes.next()); //  {value: 4, done: false};

  // filter()
  console.log('-------------filter()-------------');
  const filterRes = naturals().filter((value) => {
    return value % 2 === 0;
  });

  console.log(filterRes.next()); //  {value: 0, done: false};
  console.log(filterRes.next()); //  {value: 2, done: false};
  console.log(filterRes.next()); //  {value: 4, done: false};

  // take()
  console.log('-------------take()-------------');
  const takeRes = naturals().take(2);

  console.log(takeRes.next()); //  {value: 0, done: false};
  console.log(takeRes.next()); //  {value: 1, done: false};
  console.log(takeRes.next()); //  {value: undefined, done: true};

  // drop()
  console.log('-------------drop()-------------');
  const dropRes = naturals().drop(2);

  console.log(dropRes.next()); //  {value: 2, done: false};
  console.log(dropRes.next()); //  {value: 3, done: false};
  console.log(dropRes.next()); //  {value: 4, done: false};

  // flatMap()
  console.log('-------------flatMap()-------------');
  const flatMapRes = naturals().flatMap((value) => {
    return ['a', 'b'];
  });

  console.log(flatMapRes.next()); //  {value: "a", done: false};
  console.log(flatMapRes.next()); //  {value: "b", done: false};
  console.log(flatMapRes.next()); //  {value: "a", done: false};
  console.log(flatMapRes.next()); //  {value: "b", done: false};

  // reduce()
  console.log('-------------reduce()-------------');
  const reduceRes = naturals()
    .take(3)
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  console.log(reduceRes); //  3

  // toArray()
  const toArrayRes = naturals().take(3).toArray();
  console.log('-------------toArray()-------------');
  console.log(toArrayRes); // [0, 1, 2]

  // forEach()
  console.log('-------------forEach()-------------');
  naturals()
    .take(3)
    .forEach((value) => {
      console.log(value); // 0, 1, 2
    });

  // some()
  console.log('-------------some()-------------');
  const someRes = naturals()
    .take(3)
    .some((value) => {
      return value % 2 === 0;
    });
  console.log(someRes); // true

  // every()
  console.log('-------------every()-------------');
  const everyRes = naturals()
    .take(3)
    .every((value) => {
      return value % 2 === 0;
    });
  console.log(everyRes); // false

  // find()
  console.log('-------------find()-------------');
  const findRes = naturals()
    .take(3)
    .find((value) => {
      return value % 2 === 0;
    });
  console.log(findRes); // 0

  // Iterator.from()
  console.log('-------------Iterator.from()-------------');
  class Iter {
    next() {
      return { done: false, value: 1 };
    }
  }

  const iter = new Iter();
  const wrapper = Iterator.from(iter);
  console.log(wrapper.next()); // { value: 1, done: false })
}

function promiseTry() {
  function syncReturns() {
    return 42;
  }
  function syncThrows() {
    throw new Error('Synchronous error!');
  }
  function asyncReturns() {
    return Promise.resolve('Async result');
  }

  // Synchronous return
  Promise.try(() => syncReturns())
    .then((result) => console.log('Result:', result)) // Result: 42
    .catch((err) => console.error('Error:', err.message));

  // Synchronous throw
  Promise.try(() => syncThrows())
    .then((result) => console.log('Result:', result))
    .catch((err) => console.error('Caught:', err.message)); // Caught: Synchronous error!

  // Asynchronous return
  Promise.try(() => asyncReturns())
    .then((result) => console.log('Result:', result)) // Result: Async result
    .catch((err) => console.error('Error:', err.message));
}

function regExpModifiers() {
  const re1 = /^[a-z](?-i:[a-z])$/i;
  console.log(re1.test('ab')); // true
  console.log(re1.test('Ab')); // true
  console.log(re1.test('aB')); // false

  console.log('-------------分割线-------------');

  const re2 = /^(?i:[a-z])[a-z]$/;
  console.log(re2.test('ab')); // true
  console.log(re2.test('Ab')); // true
  console.log(re2.test('aB')); // false
}

function regExpEscape() {
  const userInput = 'file.';
  const text = "Please open the file.txt now! Don't open image files";
  const pattern = new RegExp(userInput, 'g');
  const newText = text.replace(pattern, 'sample.');
  console.log(newText);

  console.log('--------------------------分割线--------------------------');

  const pattern2 = new RegExp(RegExp.escape(userInput), 'g');
  const newText2 = text.replace(pattern2, 'sample.');

  console.log(newText2);
}

function duplicateNamedCaptureGroups() {
  const reg = /(?<year>[0-9]{4})-[0-9]{2}|[0-9]{2}-(?<year>[0-9]{4})/;
  const result1 = reg.exec('2025-10');
  const result2 = reg.exec('10-2025');

  console.log(result1.groups); // { "year": "2025" }
  console.log(result2.groups); // { "year": "2025" }
}

window.es2025 = {
  newSetMethods,
  iteratorHelpers,
  promiseTry,
  duplicateNamedCaptureGroups,
  regExpModifiers,
  regExpEscape,
};
