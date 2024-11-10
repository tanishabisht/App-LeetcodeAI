import React from 'react';

const OutputConsole = ({ output }) => {
  return (
    <div style={{ padding: '10px', background: '#f5f5f5', marginTop: '10px', maxHeight: '100px', overflowY: 'auto' }}>
      <h3>Output Console</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default OutputConsole;
