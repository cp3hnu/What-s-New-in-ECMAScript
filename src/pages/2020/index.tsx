import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2020() {
  const es2020 = (window as any).es2020;
  setCodeAndHeight(es2020);
  const {
    optionalChaining,
    nullishCoalescing,
    stringMatchAll,
    globalThisObject,
    promiseAllSettled,
    bigInt,
  } = es2020;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2020</h1>

      <h2>
        Optional Chaining<code>?.</code>
      </h2>
      <CodeExecution {...optionalChaining} />

      <h2>
        Nullish coalescing Operator<code>??</code>
      </h2>
      <CodeExecution {...nullishCoalescing} />

      <h2>
        新增<code>String.prototype.matchAll()</code>
      </h2>
      <ul>
        <li></li>
        <li>
          新增 <code>String.prototype.padEnd()</code>
        </li>
      </ul>
      <CodeExecution {...stringMatchAll} />

      <h2>
        新增<code>Promise.allSettled()</code>
      </h2>
      <CodeExecution {...promiseAllSettled} isAsync awaitSeconds={2} />

      <h2>
        新增<code>BigInt</code>数据类型
      </h2>
      <CodeExecution {...bigInt} />

      <h2>
        新增<code>globalThis</code>全局对象
      </h2>
      <CodeExecution {...globalThisObject} />
    </div>
  );
}

export default ES2020;
