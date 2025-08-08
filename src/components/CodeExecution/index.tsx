import { displayLogs, useExecuteCode } from '@/utils';
import Editor, { loader, type BeforeMount, type OnMount } from '@monaco-editor/react';
import { Button } from 'antd';
import { editor } from 'monaco-editor';
import { useRef } from 'react';
import './index.less';
import * as monaco from 'monaco-editor';

loader.config({ monaco });

type CodeExecutionProps = {
  code: string;
  editorHeight?: number | string;
};

function CodeExecution({ code, editorHeight = 200 }: CodeExecutionProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [logs, executeCode] = useExecuteCode();

  const handleEditorWillMount: BeforeMount = (monaco) => {
    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs', // 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'
      inherit: true,
      rules: [],
      colors: {
        'editorGutter.background': '#f9f9fb', // Change gutter background color
      },
    });
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monaco.editor.setTheme('myCustomTheme');
  };

  const handleCodeExecute = () => {
    if (!editorRef.current) return;
    const value = editorRef.current.getValue();
    executeCode(value);
  };

  return (
    <div className="code-execution">
      <div className="code-execution__editor">
        <Editor
          width={'100%'}
          height={editorHeight}
          defaultLanguage="javascript"
          defaultValue={code}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 12,
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
      <Button
        className="code-execution__run-button"
        type="primary"
        size="large"
        onClick={handleCodeExecute}
      >
        运行
      </Button>
      <div className="code-execution__console">{displayLogs(logs)}</div>
    </div>
  );
}

export default CodeExecution;
