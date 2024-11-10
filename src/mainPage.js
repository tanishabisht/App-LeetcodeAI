import React, { useState } from 'react';
import { ProblemStatement, CodeEditor, OutputConsole, TestCases, HintDisplay } from './components';
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
        <OutputConsole output={output} />
      </div>
      <div style={{ flex: '1' }}>
        <HintDisplay hints={previousHints} />
      </div>
    </div>
  );
};

export default CodingPlatform;
