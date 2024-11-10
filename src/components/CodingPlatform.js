import React, { useState } from 'react';
import { ProblemStatement, CodeEditor } from './index';
import axios from 'axios';

const CodingPlatform = () => {
  const [output, setOutput] = useState('');
  const [previousHints, setPreviousHints] = useState([]);

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
        problem_statement: "Maximum Sum of Contiguous Subarray",
        user_code: code,
        hint_type: "optimization",
        previous_hints: previousHints
      });
      
      const newHint = response.data.hint;
      setPreviousHints([...previousHints, newHint]);  // Append the new hint to the array
    } catch (error) {
      setPreviousHints([...previousHints, `Error: ${error.message}`]);
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
        <div style={{ padding: '10px', background: '#f5f5f5', marginTop: '10px', maxHeight: '200px', overflowY: 'auto' }}>
          <h3>Hints</h3>
          {previousHints.map((hint, index) => (
            <p key={index}><strong>Hint {index + 1}:</strong> {hint}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingPlatform;
