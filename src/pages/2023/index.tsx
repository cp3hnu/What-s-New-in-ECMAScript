import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2023() {
  const es2023 = (window as any).es2023;
  setCodeAndHeight(es2023);
  const { arrayFindFromLast, changeArrayByCopy, symbolsAsMapKeys } = es2023;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2023</h1>

      <h2>Array find from last</h2>
      <ul>
        <li>
          新增<code>Array.prototype.findLast()</code>
        </li>
        <li>
          新增<code>Array.prototype.findLastIndex()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.findLast()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.findLastIndex()</code>
        </li>
      </ul>
      <CodeExecution {...arrayFindFromLast} />

      <h2>Change Array by Copy</h2>
      <ul>
        <li>
          新增<code>Array.prototype.toReversed()</code>
        </li>
        <li>
          新增<code>Array.prototype.toSorted()</code>
        </li>
        <li>
          新增<code>Array.prototype.toSpliced()</code>
        </li>
        <li>
          新增<code>Array.prototype.with()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.toReversed()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.toSorted()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.toSpliced()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.with()</code>
        </li>
      </ul>
      <CodeExecution {...changeArrayByCopy} />

      <h2>Symbols as WeakMap keys</h2>
      <CodeExecution {...symbolsAsMapKeys} />
    </div>
  );
}

export default ES2023;
