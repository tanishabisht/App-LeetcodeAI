import React, { useState } from 'react';
import { ProblemStatement, CodeEditor, OutputConsole, HintDisplay } from '../components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { problems } from '../constant';

const CodingPlatform = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const problem = problems.find((problem) => problem.id === id);

  const [output, setOutput] = useState('');
  const [previousHints, setPreviousHints] = useState([]);

  const goBack = () => {
    navigate('/problems')
  }

  const executeCode = async (code) => {
    try {
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/executeCode', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const getHint = async (code) => {
    try {
      console.log(problem.title, code, previousHints)
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/getHint', {
        problem_statement: problem.title,
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

  if (!problem) {
    return (
      <div className="coding-platform">
        <h1>Problem not found</h1>
        <p>The requested problem ID does not exist in the system.</p>
      </div>
    );
  }

  return (
    <div className="coding-platform">
      <div className="coding-platform__panel--problem-statement">
        <ProblemStatement problemData={problem} />
      </div>
      <div className="coding-platform__panel--code-editor">
        <CodeEditor executeCode={executeCode} getHint={getHint} />
        <OutputConsole output={output} />
      </div>
      <div className="coding-platform__panel--hints-display">
        <HintDisplay hints={previousHints} />
        <button onClick={goBack} className='button'>Back</button>
      </div>
    </div>
  );
};

export default CodingPlatform;
