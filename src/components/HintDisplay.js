import React from 'react';

const HintsDisplay = ({ hints }) => {
  return (
    <div style={{ padding: '10px', background: '#e8f4fc', marginTop: '10px', maxHeight: '200px', overflowY: 'auto' }}>
      <h3>Hints</h3>
      {hints.map((hint, index) => (
        <p key={index}><strong>Hint {index + 1}:</strong> {hint}</p>
      ))}
    </div>
  );
};

export default HintsDisplay;
