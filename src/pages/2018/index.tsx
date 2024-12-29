import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2018() {
  const es2018 = (window as any).es2018;
  setCodeAndHeight(es2018);
  const {
    templateLiteralRevision,
    restAndSpreadProperties,
    regExp,
    promiseFinally,
    asyncGenerator,
  } = es2018;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2018</h1>

      <h2>
        新增<code>Promise.prototype.finally()</code>
      </h2>
      <CodeExecution {...promiseFinally} isAsync awaitSeconds={2} />

      <h2>Rest/Spread Properties</h2>
      <CodeExecution {...restAndSpreadProperties} />

      <h2>Asynchronous Iteration</h2>
      <CodeExecution {...asyncGenerator} isAsync awaitSeconds={5} />

      <h2>New features related to regular expression</h2>
      <ul>
        <li>
          新增<code>s</code>flag
        </li>
        <li>命名捕获组</li>
        <li>零宽度先行断言（Lookahead Assertions）</li>
        <li>零宽度后行断言（Lookbehind Assertions）</li>
        <li>Unicode Property Escapes</li>
      </ul>
      <CodeExecution {...regExp} />

      <h2>Template literals revision</h2>
      <CodeExecution {...templateLiteralRevision} />
    </div>
  );
}

export default ES2018;
