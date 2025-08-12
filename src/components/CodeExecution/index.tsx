import { displayLogs, useExecuteCode } from '@/utils';
import Editor, { type BeforeMount, type OnMount } from '@monaco-editor/react';
import { Button } from 'antd';
import { editor } from 'monaco-editor';
import { useRef, useState } from 'react';
import './index.less';

type CodeExecutionProps = {
  code: string;
  editorHeight: 'auto' | number | string;
};

function CodeExecution({ code, editorHeight }: CodeExecutionProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [editorActualHeight, setEditorActualHeight] = useState(50); // 初始高度
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

    if (editorHeight === 'auto') {
      const updateHeight = () => {
        const contentHeight = editor.getContentHeight();
        setEditorActualHeight(contentHeight);
        editor.layout(); // 触发重新布局
      };

      updateHeight(); // 初始化时调用

      editor.onDidContentSizeChange(() => {
        updateHeight();
      });
    }
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
          height={editorHeight === 'auto' ? editorActualHeight : editorHeight}
          defaultLanguage="javascript"
          defaultValue={code}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 12,
            minimap: {
              enabled: false,
            },
            scrollBeyondLastLine: false,
            scrollbar: {
              alwaysConsumeMouseWheel: editorHeight === 'auto' ? false : true,
              handleMouseWheel: editorHeight === 'auto' ? false : true,
              vertical: editorHeight === 'auto' ? 'hidden' : 'auto',
            },
            overviewRulerLanes: 0, // 关闭 overview ruler
            hideCursorInOverviewRuler: true, // 隐藏光标标记
            automaticLayout: true,
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
