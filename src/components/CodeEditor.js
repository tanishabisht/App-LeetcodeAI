import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const CodeEditor = ({ executeCode }) => {
  const [code, setCode] = useState('def solution():\n    pass');

  const handleRun = () => {
    executeCode(code);
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
      <button onClick={handleRun} style={{ padding: '10px', marginTop: '10px' }}>Run Code</button>
    </div>
  );
};

export default CodeEditor;
