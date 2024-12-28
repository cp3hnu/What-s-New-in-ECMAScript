import { executeCode } from '@/utils';
import Editor, { type BeforeMount, type OnMount } from '@monaco-editor/react';
import { Button } from 'antd';
import { editor } from 'monaco-editor';
import { useRef, useState } from 'react';
import './index.less';

type CodeExecutionProps = {
  code: string;
  editorHeight?: number;
};

function CodeExecution({ code, editorHeight = 200 }: CodeExecutionProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [result, setResult] = useState<string | undefined>('');

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
    const result = executeCode(value);
    setResult(result);
  };

  return (
    <div className="code-execution">
      <div className="editor-container">
        <Editor
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
      <Button type="primary" size="large" onClick={handleCodeExecute}>
        运行
      </Button>
      <div className="console">{result}</div>
    </div>
  );
}

export default CodeExecution;
