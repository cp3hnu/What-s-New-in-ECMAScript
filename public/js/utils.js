export async function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

export class Counter {
  publicField = 10;
  static publicStaticField = 'static field';
  #privateField = 20;
  static #privateStaticField = 30
  constructor() {
  }

  accessPublicField() {
    this.publicField+=1;
    console.log("publicField = ", this.publicField)
  }

  static publicStaticMethod() { 
    return 'This is static method and ' + this.publicStaticField  
  }

  #privateMethods() {
    this.#privateField += 1
  }
  
  static #privateStaticMethod() {
    Counter.#privateStaticField += 1
  }

  accessPrivateField() {
    this.#privateMethods(); 
    console.log('#privateField =', this.#privateField)
  }

  accessPrivateStaticField() {
    Counter.#privateStaticMethod(); 
    console.log('#privateStaticField =', Counter.#privateStaticField)
  }
}

export class SubCounter extends Counter {
  #privateField = 120;
  publicField = 110;
}