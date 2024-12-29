function wellFormedString() {
  const strings = [
    // Lone leading surrogate
    'ab\uD800',
    'ab\uD800c',
    // Lone trailing surrogate
    '\uDFFFab',
    'c\uDFFFab',
    // Well-formed
    'abc',
    'ab\uD83D\uDE04c',
  ];

  for (const str of strings) {
    console.log(str.isWellFormed());
  }

  for (const str of strings) {
    console.log(str.toWellFormed());
  }

  function logCharCode(str) {
    for (let i = 0; i < str.length; ++i) {
      console.log(str.charCodeAt(i).toString(16));
    }
  }

  // lone surrogates 替换成 `U+FFFD` 字符
  logCharCode(strings[0]);
  logCharCode(strings[0].toWellFormed());
}


function groupBy() {
  const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];

  // Object
  const result = Object.groupBy(inventory, ({ type }) => type);
  console.log(result);

  // Map
  const restock = { restock: true };
  const sufficient = { restock: false };
  const result2 = Map.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? restock : sufficient,
  );
  console.log(result2.get(restock));
}

function regExpWithVFlag() {
  const re1 = /^\p{Emoji}$/u;
  console.log(re1.test('⚽')); // '\u26BD'
  // true
  console.log(re1.test('👨🏾')); // '\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F'
  // false

  const re2 = /^\p{RGI_Emoji}$/v;
  console.log(re2.test('⚽')); // '\u26BD'
  // true
  console.log(re2.test('👨🏾')); // '\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F'
  // true

  // 集合标记法
  // 差集
  console.log(/[\p{Decimal_Number}--[0-9]]/v.test('𑜹')); // true
  console.log(/[\p{Decimal_Number}--[0-9]]/v.test('4')); // false

  // 交集
  const re = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;
  re.test('π'); // true
  re.test('𐆊'); // false

  // 并集
  const re3 = /^[\q{🇧🇪|abc}xyz0-9]$/v;
  console.log(re3.test('_')); // false
  console.log(re3.test('🇧🇪')); // true
  console.log(re3.test('a')); // false
  console.log(re3.test('abc')); // true
  console.log(re3.test('x')); // true
  console.log(re3.test('4')); // true

  // 改进不区分大小写的匹配
  const re4 = /\p{Lowercase_Letter}/giu;
  const re5 = /[^\P{Lowercase_Letter}]/giu;
  const string = 'aAbBcC4#';
  console.log(string.replaceAll(re4, 'X')); // 'XXXXXX4#'
  console.log(string.replaceAll(re5, 'X')); // 'aAbBcC4#''

  const re6 = /\p{Lowercase_Letter}/giv;
  const re7 = /[^\P{Lowercase_Letter}]/giv;

  const string2 = 'aAbBcC4#';
  console.log(string.replaceAll(re6, 'X')); // 'XXXXXX4#'
  console.log(string.replaceAll(re7, 'X')); // 'XXXXXX4#'
}

function transferArrayBuffer() {
  const buffer = new ArrayBuffer(8);
  const view = new Uint8Array(buffer);
  view[1] = 2;
  view[7] = 4;

  // Copy the buffer to the same size
  const buffer2 = buffer.transfer();
  console.log(buffer.detached); // true
  console.log(buffer.byteLength); // 0
  console.log(buffer2.byteLength); // 8
  const view2 = new Uint8Array(buffer2);
  console.log(view2[1]); // 2
  console.log(view2[7]); // 4

  // Copy the buffer to a smaller size
  const buffer3 = buffer2.transfer(4);
  console.log(buffer3.byteLength); // 4
  const view3 = new Uint8Array(buffer3);
  console.log(view3[1]); // 2
  console.log(view3[7]); // undefined

  // Copy the buffer to a larger size
  const buffer4 = buffer3.transfer(8);
  console.log(buffer4.byteLength); // 8
  const view4 = new Uint8Array(buffer4);
  console.log(view4[1]); // 2
  console.log(view4[7]); // 0
}

function resizableArrayBuffer() {
  const resizableBuffer = new ArrayBuffer(8, { maxByteLength: 16 });
  console.log(resizableBuffer.byteLength); // 8
  console.log(resizableBuffer.maxByteLength); // 16
  console.log(resizableBuffer.resizable); // true

  resizableBuffer.resize(12);
  console.log(resizableBuffer.byteLength); // 12
  console.log(resizableBuffer.maxByteLength); // 16
  console.log(resizableBuffer.resizable); // true
}

window.es2024 = {
  wellFormedString,
  groupBy,
  regExpWithVFlag,
  transferArrayBuffer,
  resizableArrayBuffer
}
