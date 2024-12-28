const logs: any[] = [];

const originalLog = console.log;

console.log = function (...args) {
  logs.push(args.map(formatLog).join(' '));
  originalLog.apply(console, args);
};

function displayLogs() {
  return logs.map((log) => '> ' + log).join('\n');
}

function formatLog(log: any): string {
  if (Array.isArray(log)) {
    return JSON.stringify(log, null, 2);
  } else if (typeof log === 'object') {
    return JSON.stringify(log, null, 2);
  }
  return String(log);
}

export function executeCode(code: string) {
  logs.length = 0;
  try {
    new Function(code)();
    return displayLogs();
  } catch (error) {
    console.log('Error:', (error as Error).message);
    return displayLogs();
  }
}

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
