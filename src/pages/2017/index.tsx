import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2017() {
  const es2017 = (window as any).es2017;
  setCodeAndHeight(es2017);
  const { asyncFunction, objectStaticMethods, stringPadding } = es2017;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2017</h1>

      <h2>Async Function</h2>
      <CodeExecution {...asyncFunction} />

      <h2>Object</h2>
      <ul>
        <li>
          新增<code>Object.values()</code>
        </li>
        <li>
          新增<code>Object.entries()</code>
        </li>
        <li>
          新增<code>Object.getOwnPropertyDescriptors()</code>
        </li>
      </ul>
      <CodeExecution {...objectStaticMethods} />

      <h2>String padding</h2>
      <ul>
        <li>
          新增<code>String.prototype.padStart()</code>
        </li>
        <li>
          新增<code>String.prototype.padEnd()</code>
        </li>
      </ul>
      <CodeExecution {...stringPadding} />
    </div>
  );
}

export default ES2017;
