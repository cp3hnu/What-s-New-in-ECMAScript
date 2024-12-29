import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2016() {
  const es2016 = (window as any).es2016;
  setCodeAndHeight(es2016);
  const { arrayIncludes, exponentiationOperator } = es2016;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2016</h1>

      <h2>
        新增<code>Array.prototype.includes()</code>
      </h2>

      <CodeExecution {...arrayIncludes} />
      <h2>
        新增幂运算符<code>**</code>
      </h2>
      <CodeExecution {...exponentiationOperator} />
    </div>
  );
}

export default ES2016;
