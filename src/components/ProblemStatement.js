import React from 'react';
import { problemStatement1 as problemData } from '../constant'

const ProblemStatement = () => {
  return (
    <div style={{ padding: '10px', borderRight: '1px solid #ccc', height: '100vh', overflowY: 'auto' }}>
      <h2>{problemData.title}</h2>
      <p><strong>Difficulty:</strong> {problemData.difficulty}</p>
      <p><strong>Description:</strong> {problemData.description}</p>
      
      <h3>Constraints:</h3>
      <ul>
        {problemData.constraints.map((constraint, index) => (
          <li key={index}>{constraint}</li>
        ))}
      </ul>

      <h3>Examples:</h3>
      {problemData.examples.map((example) => (
        <div key={example.example} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
          <p><strong>Example {example.example}:</strong></p>
          <p>Input: {example.input}</p>
          <p>Output: {example.output}</p>
          <p>Explanation: {example.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default ProblemStatement;
