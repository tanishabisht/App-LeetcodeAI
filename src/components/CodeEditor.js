import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const CodeEditor = ({ executeCode, getHint }) => {
  const [code, setCode] = useState('def solution():\n    pass');

  const handleRun = () => {
    executeCode(code);
  };

  const handleGetHint = () => {
    getHint(code);
  };

  return (
    <div style={{ padding: '10px', overflowY: 'auto' }}>
      <h2>Code Editor</h2>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        placeholder="Write your Python code here..."
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleRun} style={{ padding: '10px', marginRight: '10px' }}>Run Code</button>
        <button onClick={handleGetHint} style={{ padding: '10px' }}>Get Hint</button>
      </div>
    </div>
  );
};

export default CodeEditor;
