import React from 'react';
import { Hash, Clock, Database } from 'lucide-react';
import styles from './Third.module.css';

const ProblemApproaches = ({ approaches }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Hash className={styles.icon} />
          <h2 className={styles.title}>Problem Approaches</h2>
        </div>
      </div>
      <div className={styles.content}>
        {approaches.map((approach, idx) => (
          <div key={idx} className={styles.approachBox}>
            <h3 className={styles.approachTitle}>{approach.name}</h3>
            <ul className={styles.stepsList}>
              {approach.steps.map((step, stepIdx) => (
                <li key={stepIdx} className={styles.stepItem}>{step}</li>
              ))}
            </ul>
            <div className={styles.complexityInfo}>
              <div className={styles.complexityItem}>
                <Clock className={styles.complexityIcon} />
                <span>Time Complexity: {approach.complexity.time}</span>
              </div>
              <div className={styles.complexityItem}>
                <Database className={styles.complexityIcon} />
                <span>Space Complexity: {approach.complexity.space}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemApproaches;