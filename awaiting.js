const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
})

const data = await promise;
console.log('awaiting.js')
export default data;