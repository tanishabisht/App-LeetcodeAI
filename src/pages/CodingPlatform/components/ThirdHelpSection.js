import React from 'react';
import { PlayCircle, BookOpen, CheckCircle } from 'lucide-react';
import styles from './Third.module.css';

const HelpSection = ({ handleApproachesClick, handleHintsClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Let's solve this together!</h2>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          Choose an approach to see implementation details, or get smart hints based on your current code.
        </p>
        
        {/* <div className={styles.buttonContainer}>
          <button 
            className={styles.actionButton}
            onClick={handleApproachesClick}
          >
            <PlayCircle className={styles.buttonIcon} />
            <span>View Approaches</span>
            <span className={styles.buttonDescription}>Learn different strategies</span>
          </button>

          <button 
            className={styles.actionButton}
            onClick={handleHintsClick}
          >
            <BookOpen className={styles.buttonIcon} />
            <span>Get Hints</span>
            <span className={styles.buttonDescription}>Receive guided help</span>
          </button>
        </div> */}

        <div className={styles.proTip}>
          <div className={styles.proTipHeader}>
            <CheckCircle className={styles.proTipIcon} />
            <h3 className={styles.proTipTitle}>Pro Tip</h3>
          </div>
          <p className={styles.proTipText}>
            Start by understanding different approaches before diving into implementation. 
            Each approach offers unique insights into problem-solving strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;