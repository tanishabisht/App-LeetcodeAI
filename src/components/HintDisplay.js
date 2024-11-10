import React from 'react';

const HintsDisplay = ({ hints }) => {
  return (
    <div className="hints-display">
      <h3 className="hints-display__title">Hints</h3>
      {hints.map((hint, index) => (
        <p key={index} className="hints-display__hint">
          <strong>Hint {index + 1}:</strong> {hint}
        </p>
      ))}
    </div>
  );
};

export default HintsDisplay;
