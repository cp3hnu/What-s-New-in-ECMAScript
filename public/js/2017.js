async function asyncFunction() {
  async function delay() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(1024)
      }, 1000)
    })
    const result = await promise;
    return result
  }
  
  async function testAsyncFunction() {
    const result = await delay();
    console.log(result); // 1024
  }

  testAsyncFunction();
}

function objectStaticMethods() {
  const object = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.values(object))
  console.log(Object.entries(object))
  console.log(Object.getOwnPropertyDescriptors(object))
}

function stringPadding() {
  console.log('abc'.padStart(10));         // "       abc"
  console.log('abc'.padStart(8, "0"));     // "00000abc"
  console.log('abc'.padStart(6,"123465"))  // "123abc"
  console.log('abc'.padStart(1));          // "abc"
  console.log('abc'.padStart(10, "foo"))   // "foofoofabc"

  console.log('abc'.padEnd(10));         // "       abc"
  console.log('abc'.padEnd(8, "0"));     // "00000abc"
  console.log('abc'.padEnd(6,"123465"))  // "123abc"
  console.log('abc'.padEnd(1));          // "abc"
  console.log('abc'.padEnd(10, "foo"))   // "foofoofabc"
}

window.es2017 = {
  asyncFunction,
  objectStaticMethods,
  stringPadding,
}