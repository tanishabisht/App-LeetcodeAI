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
      setPreviousHints([...previousHints, newHint]);
    } catch (error) {
      setPreviousHints([...previousHints, `Error: ${error.message}`]);
    }
  };

  return (
    <div className="coding-platform">
      <div className="coding-platform__panel--problem-statement">
        <ProblemStatement />
      </div>
      <div className="coding-platform__panel--code-editor">
        <CodeEditor executeCode={executeCode} getHint={getHint} />
        <OutputConsole output={output} />
      </div>
      <div className="coding-platform__panel--hints-display">
        <HintDisplay hints={previousHints} />
      </div>
    </div>
  );
};

export default CodingPlatform;
