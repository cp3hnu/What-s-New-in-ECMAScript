import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2022() {
  const es2022 = (window as any).es2022;
  setCodeAndHeight(es2022);
  const {
    classFields,
    ergonomicBrandChecks,
    classStaticInitializationBlock,
    objectHasOwn,
    arrayAt,
    regExpMatchIndices,
  } = es2022;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2022</h1>

      <h2>Class Fields</h2>
      <CodeExecution {...classFields} />

      <h2>Ergonomic brand checks for Private Fields</h2>
      <CodeExecution {...ergonomicBrandChecks} />

      <h2>Class Static Initialization Block</h2>
      <CodeExecution {...classStaticInitializationBlock} />

      <h2>
        新增<code>Object.hasOwn()</code>
      </h2>
      <CodeExecution {...objectHasOwn} />

      <h2>索引 </h2>
      <ul>
        <li>
          新增<code>Array.prototype.at()</code>
        </li>
        <li>
          新增<code>String.prototype.at()</code>
        </li>
        <li>
          新增<code>TypedArray.prototype.at()</code>
        </li>
      </ul>

      <CodeExecution {...arrayAt} />

      <h2>
        <code>RegExp Match Indices</code>
      </h2>
      <CodeExecution {...regExpMatchIndices} />
    </div>
  );
}

export default ES2022;
