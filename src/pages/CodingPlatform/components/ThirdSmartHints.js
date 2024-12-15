import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import styles from './Third.module.css';
import axios from 'axios'

const SmartHints = ({ problemTitle, code }) => {
  const [previousHints, setPreviousHints] = useState([]);


  const handleGetHint = async () => {
    try {
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/getHint', {
        problem_statement: problemTitle,
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
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <BookOpen className={styles.icon} />
          <h2 className={styles.title}>Smart Hints</h2>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          Hints can be customized based on the problem details.
        </p>
        <button 
          className={styles.button}
          onClick={handleGetHint}
        >
          Get Hint
        </button>
        {previousHints.map((hint, idx) => (
          <div key={idx} className={styles.hintBox}>
            <p className={styles.hintText}>
              <span className={styles.hintNumber}>Hint {idx + 1}:</span> {hint}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartHints;