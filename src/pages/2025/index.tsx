import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2025() {
  const es2025 = (window as any).es2025;
  setCodeAndHeight(es2025);
  const {
    newSetMethods,
    iteratorHelpers,
    promiseTry,
    duplicateNamedCaptureGroups,
    regExpModifiers,
    regExpEscape,
  } = es2025;

  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2025</h1>

      <h2>New Set methods</h2>
      <ul>
        <li>
          新增<code>Set.prototype.intersection(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.union(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.difference(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.symmetricDifference(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.isSubsetOf(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.isSupersetOf(other)</code>
        </li>
        <li>
          新增<code>Set.prototype.isDisjointFrom(other)</code>
        </li>
      </ul>
      <CodeExecution {...newSetMethods} />

      <h2>Sync Iterator helpers</h2>
      <ul>
        <li>
          新增<code>Iterator.prototype.map()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.filter()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.take()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.drop()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.flatMap()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.reduce()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.toArray()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.forEach()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.some()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.every()</code>
        </li>
        <li>
          新增<code>Iterator.prototype.find()</code>
        </li>
        <li>
          新增<code>Iterator.from()</code>
        </li>
      </ul>
      <CodeExecution {...iteratorHelpers} />

      <h2>Promise.try()</h2>
      <ul>
        <li>
          新增<code>Promise.try()</code>
        </li>
      </ul>
      <CodeExecution {...promiseTry} />

      <h2>Duplicate Named Capture Groups</h2>
      <ul>
        <li>允许重复的命名捕获组</li>
      </ul>
      <CodeExecution {...duplicateNamedCaptureGroups} />

      <h2>RegExp Modifiers</h2>
      <ul>
        <li>子表达式添加正则表达式标志</li>
      </ul>
      <CodeExecution {...regExpModifiers} />

      <h2>RegExp.escape()</h2>
      <ul>
        <li>正则表达式转义</li>
      </ul>
      <CodeExecution {...regExpEscape} />
    </div>
  );
}

export default ES2025;
