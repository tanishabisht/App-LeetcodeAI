import React, { useState } from 'react';
import { ProblemStatement, CodeEditor } from './index';
import { problemStatement1 } from '../constant'
import axios from 'axios';

const CodingPlatform = () => {
  const [output, setOutput] = useState('');
  const [hint, setHint] = useState('');

  const executeCode = async (code) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/executeCode', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const getHint = async (code) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/getHint', {
        problem_statement: JSON.stringify(problemStatement1),
        user_code: code,
        hint_type: "optimization",
        previous_hints: []
      });
      setHint(response.data.hint);
    } catch (error) {
      setHint(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '1' }}>
        <ProblemStatement />
      </div>
      <div style={{ flex: '3' }}>
        <CodeEditor executeCode={executeCode} getHint={getHint} />
        <div style={{ padding: '10px', background: '#f5f5f5', marginTop: '10px', height: '100px', overflowY: 'auto' }}>
          <h3>Output Console</h3>
          <pre>{output}</pre>
        </div>
        <div style={{ padding: '10px', background: '#f5f5f5', marginTop: '10px', height: '100px', overflowY: 'auto' }}>
          <h3>Hint</h3>
          <pre>{hint}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodingPlatform;
