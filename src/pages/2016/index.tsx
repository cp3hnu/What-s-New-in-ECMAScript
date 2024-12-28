import CodeExecution from '@/components/CodeExecution';
import { setCodeAndHeight } from '@/utils';

function ES2016() {
  const es2016 = (window as any).es2016;
  setCodeAndHeight(es2016);
  const { includes, exponentiation } = es2016;
  return (
    <div className="page-container">
      <h1>What&apos;s New in ECMAScript 2016</h1>
      <h2>
        新增 <code>Array.prototype.includes</code> 方法
      </h2>
      <CodeExecution {...includes} />
      <h2>
        新增 Exponentiation <code>**</code> 运算符
      </h2>
      <CodeExecution {...exponentiation} />
    </div>
  );
}

export default ES2016;
