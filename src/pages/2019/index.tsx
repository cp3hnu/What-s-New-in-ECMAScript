import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2019() {
  const es2019 = (window as any).es2019;
  setCodeAndHeight(es2019);
  const {
    arrayFlat,
    stringTrim,
    objectEntries,
    symbolDescription,
    jsonStringify,
    functionToString,
  } = es2019;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2019</h1>

      <h2>Array</h2>
      <ul>
        <li>
          新增<code>Array.prototype.flat()</code>
        </li>
        <li>
          新增<code>Array.prototype.flatMap()</code>
        </li>
      </ul>
      <CodeExecution {...arrayFlat} />

      <h2>String</h2>
      <ul>
        <li>
          新增<code>String.prototype.trimStart()</code>
        </li>
        <li>
          新增<code>String.prototype.trimEnd()</code>
        </li>
      </ul>
      <CodeExecution {...stringTrim} />

      <h2>
        新增<code>Object.fromEntries()</code>
      </h2>
      <CodeExecution {...objectEntries} />

      <h2>
        新增<code>Symbol.prototype.description</code>
      </h2>
      <CodeExecution {...symbolDescription} />

      <h2>Well-formed JSON.stringify</h2>
      <CodeExecution {...jsonStringify} />

      <h2>
        <code>Function.prototype.toString()</code> revision
      </h2>
      <CodeExecution {...functionToString} />
    </div>
  );
}

export default ES2019;
