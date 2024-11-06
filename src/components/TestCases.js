import React, { useState } from 'react';

const TestCases = ({ runTestCase }) => {
  const [customInput, setCustomInput] = useState('');
  const [hintIndex, setHintIndex] = useState(0);

  const hints = [
    "Hint 1: This problem can be solved in linear time using Kadane's algorithm.",
    "Hint 2: Try to keep track of the maximum sum encountered so far and reset when encountering negative sums.",
    "Hint 3: If all elements in the array are negative, the maximum subarray sum is the largest single element.",
  ];

  const handleRunSampleTest = (input) => {
    runTestCase(input);
  };

  const handleRunCustomTest = () => {
    if (customInput) {
      runTestCase(customInput);
    }
  };

  const showNextHint = () => {
    // Show the next hint by increasing the hint index up to the length of hints array
    setHintIndex((prevIndex) => Math.min(prevIndex + 1, hints.length));
  };

  return (
    <div style={{ padding: '10px', borderLeft: '1px solid #ccc', height: '100vh', overflowY: 'auto' }}>
      <h2>Test Cases</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Sample Test Cases</h3>
        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
          <strong>Test Case 1:</strong>
          <pre>Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]</pre>
          <pre>Expected Output: 6</pre>
          <button onClick={() => handleRunSampleTest('[-2, 1, -3, 4, -1, 2, 1, -5, 4]')} style={{ padding: '5px', marginTop: '5px' }}>
            Run Test Case 1
          </button>
        </div>
        
        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
          <strong>Test Case 2:</strong>
          <pre>Input: arr = [1]</pre>
          <pre>Expected Output: 1</pre>
          <button onClick={() => handleRunSampleTest('[1]')} style={{ padding: '5px', marginTop: '5px' }}>
            Run Test Case 2
          </button>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
          <strong>Test Case 3:</strong>
          <pre>Input: arr = [5, 4, -1, 7, 8]</pre>
          <pre>Expected Output: 23</pre>
          <button onClick={() => handleRunSampleTest('[5, 4, -1, 7, 8]')} style={{ padding: '5px', marginTop: '5px' }}>
            Run Test Case 3
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Custom Test Case</h3>
        <input
          type="text"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="Enter array, e.g., [3, -2, 5, -1]"
          style={{ width: '80%', padding: '5px' }}
        />
        <button onClick={handleRunCustomTest} style={{ padding: '5px', marginLeft: '10px' }}>
          Run Custom Test
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={showNextHint} 
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
          disabled={hintIndex >= hints.length} // Disable if no more hints
        >
          {hintIndex < hints.length ? 'Get Hint' : 'No More Hints'}
        </button>

        {hintIndex > 0 && (
          <div style={{ marginTop: '10px', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px' }}>
            <h3>Hints</h3>
            <ul>
              {hints.slice(0, hintIndex).map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestCases;
