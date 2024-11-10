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
    <div className="code-editor">
      <h2 className="code-editor__title">Code Editor</h2>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        placeholder="Write your Python code here..."
        className="code-editor__codemirror"
      />
      <div className="code-editor__button-group">
        <button onClick={handleRun} className="code-editor__button">Run Code</button>
        <button onClick={handleGetHint} className="code-editor__button">Get Hint</button>
      </div>
    </div>
  );
};

export default CodeEditor;
