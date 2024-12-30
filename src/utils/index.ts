import { useCallback, useState } from 'react';

// 保留原始的 console.log
const originalLog = console.log;

// 显示日志
export const displayLogs = (logs: readonly string[]) => {
  return logs.map((log) => '> ' + log).join('\n');
};

// 格式化日志
const formatLog = (log: any): string => {
  if (typeof log === 'object') {
    return JSON.stringify(log, null, 2)
      .split('\n')
      .map((line, index) => (index === 0 ? '' : '  ') + line)
      .join('\n');
  }
  return String(log);
};

// 获取函数体
export const getFunctionBody = (fn: () => void): string => {
  const fullCode = fn.toString();
  if (fullCode.includes('{')) {
    // 普通函数或带大括号的箭头函数
    const bodyMatch = fullCode.match(/\{([\s\S]*)\}/);
    return bodyMatch
      ? bodyMatch[1]
          .trim()
          .split('\n')
          .map((line) => line.replace(/^[\s]{2}/g, ''))
          .join('\n')
      : '';
  } else {
    // 单表达式箭头函数
    return fullCode.split('=>')[1].trim();
  }
};

// 计算代码高度
export const getCodeHeight = (code: string) => {
  return code.split('\n').length * 20;
};

// 设置代码和高度
export const setCodeAndHeight = (esObject: { [key: string]: any }) => {
  for (const key in esObject) {
    if (Object.hasOwn(esObject, key)) {
      const value = esObject[key];
      if (typeof value === 'function') {
        value.code = getFunctionBody(value);
        value.editorHeight = getCodeHeight(value.code);
      }
    }
  }
};

export const useExecuteCode = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const executeCode = useCallback((code: string) => {
    console.log = (...args) => {
      setLogs((prev) => [...prev, args.map(formatLog).join(' ')]);
      originalLog.apply(console, args);
    };

    setLogs([]);
    try {
      new Function(code)();
    } catch (error) {
      console.log('Error:', (error as Error).message);
    }
  }, []);

  return [logs, executeCode] as const;
};
