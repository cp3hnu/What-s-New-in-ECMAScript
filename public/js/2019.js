function arrayFlat(params) {
  // flat
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat()); // [0, 1, 2, 3, 4]
  const arr2 = [0, 1, 2, [[3, 4]]];
  console.log(arr2.flat()); // [0, 1, 2, [3, 4]]
  console.log(arr2.flat(2)); // [0, 1, 2, 3, 4]

  // 递归 flat 函数
  function flat(array) {
    const flatArray = [];
    function recursionFlat(item) {
      if (Array.isArray(item)) {
        for (const i of item) {
          recursionFlat(i);
        }
      } else {
        flatArray.push(item);
      }
    }
    recursionFlat(array);
    return flatArray;
  }

  console.log(flat(arr2)); // [0, 1, 2, 3, 4]

  // flatMap
  const arr3 = [1, 2, 3, 4];
  console.log(arr3.flatMap((x) => x * x)); // 1, 4, 9, 16
}

function stringTrim() {
  let str = '   foo  ';
  console.log(str.length); // 8
  str = str.trimStart();
  console.log(str.length); // 5
  str = str.trimEnd();
  console.log(str.length); // 3
}


function objectEntries() {
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);
  const obj = Object.fromEntries(entries);
  console.log(obj); // { foo: "bar", baz: 42 }
}

function symbolDescription() {
  console.log(Symbol('desc').description); // "desc"
  console.log(Symbol('desc').toString()); // "Symbol(desc)"
  console.log(Symbol(22).description); // "22"， 注意这里是字符串不是数字
  console.log(Symbol.for('foo').description); // "foo"
}

function jsonStringify() {
  console.log(JSON.stringify('\uD800')); // "\ud800" 以前是 "�"
}

function functionToString() {
  function /* a comment */ foo () {}
  console.log(foo.toString());

  // 以前输出
  "function foo() {}"

  // 现在输出
  "function /* comment */ foo () {}"
}

window.es2019 = {
  arrayFlat,
  stringTrim,
  objectEntries,
  symbolDescription,
  jsonStringify,
  functionToString
}