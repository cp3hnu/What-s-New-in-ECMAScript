function stringReplaceAll() {
  const p = 'I saw a saw saw a saw';
  console.log(p.replaceAll('saw', 'see')); //  I see a see see a see
  const regex = /saw/g;
  console.log(p.replaceAll(regex, 'listen')); // I listen a listen listen a listen

  const str = 'table football, foosball';
  const regex1 = /foo(?<name>[a-z]+)/g;
  console.log(str.replaceAll(regex1, 'basket($<name>)')); // table basket(tball), basket(sball)

  const replacedStr = str.replaceAll(regex1, (matched, p1, offset, input, groups) => {
    console.log(matched,p1, offset, groups)
    return `basket(${p1})`
  })
  console.log(replacedStr); // table basket(tball), basket(sball)
}

function promiseAny() {
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'quick')
  });
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'slow')
  });
  const promises = [promise1, promise2, promise3];
  Promise.any(promises).then((value) => console.log(value)); // quick

  const promise4 = Promise.reject(0);
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'quick')
  });
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'slow')
  });

  Promise.any([promise4, promise5, promise6])
    .catch((error) => {
      console.log(error.errors)
    });
}

function logicalAssignment() {
  let a = 1;
  let b = 2;
  a &&= b;
  console.log(a); // 2

  let c = 0;
  let d = 1;
  c ||= d;
  console.log(c); // 1

  let e = null;
  let f = 1;
  e ??= f;
  console.log(e); // 1
}

function numberSeparators() {
  const billion = 1_000_000_000;
  console.log(billion);
}

window.es2021 = {
  stringReplaceAll,
  promiseAny,
  logicalAssignment,
  numberSeparators
}

