import React from 'react';
import { problemStatement1 as problemData } from '../constant';

const ProblemStatement = () => {
  return (
    <div className="problem-statement">
      <h2 className="problem-statement__title">{problemData.title}</h2>
      <p className="problem-statement__difficulty"><strong>Difficulty:</strong> {problemData.difficulty}</p>
      <p className="problem-statement__description"><strong>Description:</strong> {problemData.description}</p>

      <h3 className="problem-statement__constraints-heading">Constraints:</h3>
      <ul className="problem-statement__constraints-list">
        {problemData.constraints.map((constraint, index) => (
          <li key={index}>{constraint}</li>
        ))}
      </ul>

      <h3 className="problem-statement__examples-heading">Examples:</h3>
      {problemData.examples.map((example) => (
        <div key={example.example} className="problem-statement__example">
          <p className="problem-statement__example-title"><strong>Example {example.example}:</strong></p>
          <p>Input: {example.input}</p>
          <p>Output: {example.output}</p>
          <p>Explanation: {example.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default ProblemStatement;
