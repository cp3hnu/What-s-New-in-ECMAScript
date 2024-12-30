import CodeExecution from '@/components/CodeExecution';
import dedent from 'dedent';
import styles from './index.less';

function Playground() {
  const code =
    dedent`
    // Write your code here
    console.log('Hello World!');
  ` + '\n';
  return (
    <div className={styles['playground']}>
      <CodeExecution code={code} editorHeight={'100%'} />
    </div>
  );
}

export default Playground;
