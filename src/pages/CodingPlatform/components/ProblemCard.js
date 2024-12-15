import React from 'react';
import styles from './ProblemCard.module.css';

const ProblemCard = ({ problem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>{problem.title}</h2>
          <span className={styles.difficultyBadge}>
            {problem.difficulty}
          </span>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <p className={styles.description}>{problem.description}</p>
        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Constraints:</h3>
          <ul className={styles.constraintsList}>
            {problem.constraints.map((constraint, idx) => (
              <li key={idx} className={styles.constraintItem}>{constraint}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Examples:</h3>
          {problem.examples.map((example, idx) => (
            <div key={idx} className={styles.exampleBox}>
              <p className={styles.codeText}>Input: {example.input}</p>
              <p className={styles.codeText}>Output: {example.output}</p>
              <p className={styles.explanationText}>Explanation: {example.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;