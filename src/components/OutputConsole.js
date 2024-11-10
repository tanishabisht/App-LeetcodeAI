import React from 'react';

const OutputConsole = ({ output }) => {
  return (
    <div className="output-console">
      <h3 className="output-console__title">Output Console</h3>
      <pre className="output-console__text">{output}</pre>
    </div>
  );
};

export default OutputConsole;
