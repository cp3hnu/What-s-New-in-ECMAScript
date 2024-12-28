import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2024() {
  const es2024 = (window as any).es2024;
  setCodeAndHeight(es2024);
  const {
    wellFormedString,
    groupBy,
    regexpWithVFlag,
    resizableArrayBuffer,
    transferArrayBuffer,
  } = es2024;

  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2024</h1>
      <h2>Well-Formed Unicode Strings</h2>
      <ul>
        <li>
          新增<code>String.prototype.isWellFormed()</code>
        </li>
        <li>
          新增<code>String.prototype.toWellFormed()</code>
        </li>
      </ul>
      <CodeExecution {...wellFormedString} />

      <h2>Array Grouping</h2>
      <ul>
        <li>
          新增<code>Object.groupBy()</code>
        </li>
        <li>
          新增<code>Map.groupBy()</code>
        </li>
      </ul>
      <CodeExecution {...groupBy} />

      <h2>RegExp v flag with set notation + properties of strings</h2>
      <ul>
        <li>
          新增 <code>v</code> flag
        </li>
        <li>新增集合标记法</li>
        <li>改进不区分大小写的匹配</li>
      </ul>
      <CodeExecution {...regexpWithVFlag} />

      <h2>Resizable and growable ArrayBuffers</h2>
      <ul>
        <li>
          <code>ArrayBuffer</code> 构造函数新增 <code>maxByteLength</code> 选项
        </li>
        <li>
          新增<code>ArrayBuffer.prototype.resize()</code>
        </li>
        <li>
          新增<code>ArrayBuffer.prototype.maxByteLength</code>
        </li>
        <li>
          新增<code>ArrayBuffer.prototype.resizable</code>
        </li>
      </ul>
      <CodeExecution {...resizableArrayBuffer} />

      <h2>ArrayBuffer transfer</h2>
      <ul>
        <li>
          新增 <code>ArrayBuffer.prototype.transfer()</code>
        </li>
        <li>
          新增 <code>ArrayBuffer.prototype.transferToFixedLength()</code>
        </li>
        <li>
          新增 <code>ArrayBuffer.prototype.detached</code>
        </li>
      </ul>
      <CodeExecution {...transferArrayBuffer} />
    </div>
  );
}

export default ES2024;
