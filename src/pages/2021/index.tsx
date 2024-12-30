import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2021() {
  const es2021 = (window as any).es2021;
  setCodeAndHeight(es2021);
  const { stringReplaceAll, promiseAny, logicalAssignment, numberSeparators } =
    es2021;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2021</h1>

      <h2>
        新增<code>String.prototype.replaceAll()</code>
      </h2>
      <CodeExecution {...stringReplaceAll} />

      <h2>
        新增<code>Promise.any()</code>
      </h2>
      <CodeExecution {...promiseAny} />

      <h2>Logical Assignment Operators</h2>
      <CodeExecution {...logicalAssignment} />

      <h2>Numeric separators</h2>
      <CodeExecution {...numberSeparators} />
    </div>
  );
}

export default ES2021;
