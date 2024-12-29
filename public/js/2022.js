function classFields() {
  class Counter {
    publicField = 10;
    static publicStaticField = 'static field';
    #privateField = 20;
    static #privateStaticField = 30;
    constructor() {}

    accessPublicField() {
      this.publicField += 1;
      console.log('publicField = ', this.publicField);
    }

    static publicStaticMethod() {
      return 'This is static method and ' + this.publicStaticField;
    }

    #privateMethods() {
      this.#privateField += 1;
    }

    static #privateStaticMethod() {
      Counter.#privateStaticField += 1;
    }

    accessPrivateField() {
      this.#privateMethods();
      console.log('#privateField =', this.#privateField);
    }

    accessPrivateStaticField() {
      Counter.#privateStaticMethod();
      console.log('#privateStaticField =', Counter.#privateStaticField);
    }
  }

  class SubCounter extends Counter {
    #privateField = 120;
    publicField = 110;
  }

  console.log('**Public class fields**');
  const count = new Counter();
  count.accessPublicField();

  console.log('**Public static class fields**');
  console.log(Counter.publicStaticField);
  console.log(Counter.publicStaticMethod());

  console.log('**Private class features**');
  count.accessPrivateField();
  // 下面两行代码会报错
  // console.log(count.#privateField);
  // console.log(count.#privateMethods());

  console.log('**Private static class features**');
  count.accessPrivateStaticField();
  // 下面两行代码会报错
  // console.log(Counter.#privateStaticField);
  // console.log(count.#privateStaticMethod());

  console.log('**Inherit**');
  const s = new SubCounter();
  s.accessPublicField();
  s.accessPrivateField();
  console.log(SubCounter.publicStaticField);
  console.log(SubCounter.publicStaticMethod());
}

function ergonomicBrandChecks() {
  class C1 {
    #priv() {}
    static check(obj) {
      return #priv in obj;
    }
  }
  console.log(C1.check(new C1())); // true
}

function classStaticInitializationBlock() {
  class Translator {
    static translations = {
      yes: 'ja',
      no: 'nein',
      maybe: 'vielleicht',
    };
    static englishWords = [];
    static germanWords = [];
    static {
      for (const [english, german] of Object.entries(this.translations)) {
        this.englishWords.push(english);
        this.germanWords.push(german);
      }
    }
  }
  console.log(Translator.englishWords);
  console.log(Translator.germanWords);
}

function objectHasOwn() {
  const object1 = {
    prop: 'exists',
  };

  console.log(Object.hasOwn(object1, 'prop')); // true
  console.log(Object.hasOwn(object1, 'prop1')); // false

  const obj = Object.create(null);
  // TypeError: obj.hasOwnProperty is not a function
  // obj.hasOwnProperty("foo")
  console.log(Object.hasOwn(obj, 'foo'));
  const object = {
    hasOwnProperty() {
      throw new Error('gotcha!');
    },
  };
  console.log(Object.hasOwn(object, 'foo'));
}

function arrayAt() {
  console.log([1, 2, 3, 4, 5].at(3));
  console.log([1, 2, 3, 4, 5].at(-2));
}

function regExpMatchIndices() {
  const matchObj = /(a+)(?<name>b+)/d.exec('aaaabb');
  console.log('indices = ', matchObj.indices);
  console.log('\nmatchObj = ', matchObj);
}

window.es2022 = {
  classFields,
  ergonomicBrandChecks,
  classStaticInitializationBlock,
  objectHasOwn,
  arrayAt,
  regExpMatchIndices
}