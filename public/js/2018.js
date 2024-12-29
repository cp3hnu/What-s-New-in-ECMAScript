function promiseFinally() {
  function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }

  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Promise.prototype.finally');
    });
}

function restAndSpreadProperties() {
  const { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
  console.log(a); // 10
  console.log(a); // 20
  console.log(rest); // {c: 30, d: 40}

  const obj = {
    c: 30,
    d: 40,
  };
  const obj1 = {
    a: 10,
    b: 20,
    ...obj,
  };
  console.log(obj1); // {a: 10, b: 20, c: 30, d: 40}
}

function asyncGenerator() {
  class AsynchronousIteration {
    constructor(max) {
      this.max = max;
    }
    [Symbol.asyncIterator]() {
      const max = this.max;
      let count = 0;
      return {
        next() {
          if (count <= max) {
            return new Promise((resolve) => {
              resolve({ value: count++, done: false });
            });
          } else {
            return new Promise((resolve) => {
              resolve({ value: count++, done: true });
            });
          }
        },
      };
    }
  }

  async function testAsyncIteration() {
    const iterable = new AsynchronousIteration(5);
    for await (const count of iterable) {
      console.log(count);
    }
  }

  testAsyncIteration();
}

function regExp() {
  // s flag
  console.log(/^.$/.test('\n')); // false
  console.log(/^.$/s.test('\n')); // true

  // Named capture groups
  const eventDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
  const matchedObject = eventDate.exec('2019-04-03');
  console.log(matchedObject.groups.year); // 2019
  console.log(matchedObject.groups.month); // 04
  console.log(matchedObject.groups.day); // 03

  // Lookahead
  const regExp1 = /\w+(?=ing)/;
  console.log(regExp1.exec('starting')[0]); // start
  console.log(regExp1.exec('start')); // null  

  const regExp2 = /\d{3}(?!\d)/;
  console.log(regExp2.exec('1234')[0]); // 234


  // Lookbehind
  const regExp3 = /(?<=\$)\d+(\.\d*)?/;
  console.log(regExp3.exec('$199')[0]); // 199
  console.log(regExp3.exec('199')); // null

  const regExp4 = /(?<!\$)\d+(\.\d*)?/;
  console.log(regExp4.exec('￥199')[0]); // 199
  console.log(regExp4.exec('$199')[0]); // 99 (1 不是 $)

  // Unicode Property Escapes
  const result = /\p{White_Space}+/u.test('3 empanadas');
  console.log(result); // true

  const regexGreekSymbol = /\p{Script=Greek}/u;
  console.log(regexGreekSymbol.test('π')); // true
}

function templateLiteralRevision() {
  function latex(str) {
    return { cooked: str[0], raw: str.raw[0] };
  }
  console.log(latex`\unicode`);

  // 下面这个会抛出 SyntaxError
  // let bad = `bad escape sequence: \unicode`
}

window.es2018 = {
  templateLiteralRevision,
  restAndSpreadProperties,
  regExp,
  promiseFinally,
  asyncGenerator,
};
