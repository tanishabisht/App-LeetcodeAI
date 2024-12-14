import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Play, Zap, Brain, Code2, MessageSquare, Lightbulb } from 'lucide-react';
import styles from './CodingPlatform.module.css';
import { Navbar } from '../components'

const CodingPlatform = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [userNote, setUserNote] = useState('');

  const renderInfoPanel = () => {
    switch (activePanel) {
      case 'hint':
        return (
          <div className={styles.hintPanel}>
            <h2 className={styles.hintPanelTitle}>
              <Lightbulb className="text-amber-500" />
              Smart Hints
            </h2>
            <div className={styles.hintsList}>
              <div className={styles.hintCard}>
                <div className={styles.hintHeader}>
                  <div className={styles.hintNumber}>1</div>
                  <span className={styles.hintTitle}>Start with edge cases</span>
                </div>
                <p className={styles.hintText}>
                  Your current solution doesn't handle negative numbers. Try considering an array with all negative elements.
                </p>
              </div>
              <div className={styles.hintCard}>
                <div className={styles.hintHeader}>
                  <div className={styles.hintNumber}>2</div>
                  <span className={styles.hintTitle}>Think about the current sum</span>
                </div>
                <p className={styles.hintText}>
                  Consider when it's beneficial to start a new subarray versus extending the current one.
                </p>
              </div>
            </div>
          </div>
        );
      case 'kadane':
        return (
          <div className={styles.hintPanel}>
            <h2 className={styles.hintPanelTitle}>
              <Zap className="text-violet-500" />
              Kadane's Algorithm
            </h2>
            <div className={styles.algorithmInfo}>
              <div className={styles.insightCard}>
                <h3 className={styles.insightTitle}>Key Insight</h3>
                <p className={styles.insightText}>
                  At each position, we have two choices: start a new subarray or extend the existing one.
                </p>
              </div>
              <div className={styles.stepsList}>
                <h3 className={styles.stepsTitle}>Steps:</h3>
                <ol className={styles.steps}>
                  <li>Keep track of the maximum sum ending at current position</li>
                  <li>Update global maximum if current sum is larger</li>
                  <li>Reset current sum to 0 if it becomes negative</li>
                </ol>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <Navbar />
      <br/>
      <br/>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          {/* Left Panel - Problem & Approaches */}
          <div className={styles.leftPanel}>
            <div className={styles.problemCard}>
              <h1 className={styles.problemTitle}>Maximum Sum of Contiguous Subarray</h1>
              <div className={styles.problemDescription}>
                <p>Given an array of integers, write a function that finds the maximum sum of any contiguous subarray...</p>
                
                <h3 className={styles.constraintsTitle}>Constraints:</h3>
                <ul className={styles.constraintsList}>
                  <li>1 ≤ len(arr) ≤ 10^5</li>
                  <li>-10^4 ≤ arr[i] ≤ 10^4</li>
                </ul>
              </div>
            </div>

            {/* Smart Hints Button */}
            <button 
              onClick={() => setActivePanel('hint')}
              className={styles.hintButton}
            >
              <div className={styles.hintButtonContent}>
                <Lightbulb className="text-amber-500" />
                <span className={styles.hintButtonText}>Get Smart Hints</span>
              </div>
              <ChevronRight className="text-slate-400" />
            </button>

            {/* Approaches Section */}
            <div className={styles.approachesSection}>
              <div className={styles.approachesHeader}>
                <Brain className="text-violet-500" />
                <h2 className={styles.approachesTitle}>Problem Approaches</h2>
              </div>
              
              <div className={styles.approachesContent}>
                <button 
                  onClick={() => setActivePanel('kadane')}
                  className={styles.approachButton}
                >
                  <div className={styles.approachInfo}>
                    <Zap className="text-violet-400" />
                    <div className={styles.approachDetails}>
                      <h3 className={styles.approachName}>Kadane's Algorithm</h3>
                      <p className={styles.approachDescription}>Dynamic Programming Approach</p>
                    </div>
                  </div>
                  <div className={styles.approachMeta}>
                    <div className={styles.complexityBadgeGood}>O(n)</div>
                    <ChevronRight className="text-slate-400" />
                  </div>
                </button>

                <button 
                  onClick={() => setActivePanel('divide')}
                  className={styles.approachButton}
                >
                  <div className={styles.approachInfo}>
                    <Code2 className="text-violet-400" />
                    <div className={styles.approachDetails}>
                      <h3 className={styles.approachName}>Divide and Conquer</h3>
                      <p className={styles.approachDescription}>Recursive Approach</p>
                    </div>
                  </div>
                  <div className={styles.approachMeta}>
                    <div className={styles.complexityBadgeWarning}>O(n log n)</div>
                    <ChevronRight className="text-slate-400" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Center - Code Editor */}
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderContent}>
                <h2 className={styles.editorTitle}>Python Solution</h2>
                <button className={styles.runButton}>Run Code</button>
              </div>
            </div>
            
            <div className={styles.codeArea}>
              def solution():
                  pass
            </div>

            <div className={styles.editorFooter}>
              <div className={styles.notesSection}>
                <h3 className={styles.notesTitle}>Solution Notes</h3>
                <textarea
                  placeholder="Write a brief note about your approach..."
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  className={styles.notesTextarea}
                  rows={2}
                />
              </div>
              <div className={styles.consoleSection}>
                <h3 className={styles.notesTitle}>Output Console</h3>
                <div className={styles.consoleOutput}>
                  {/* Console output would go here */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Dynamic Info Panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoPanelCard}>
              {renderInfoPanel() || (
                <div className={styles.welcomePanel}>
                  <div className={styles.welcomeHeader}>
                    <Brain className={styles.welcomeIcon} />
                    <h3 className={styles.welcomeTitle}>Let's solve this together!</h3>
                    <p className={styles.welcomeDescription}>
                      Choose an approach to see implementation details, or get smart hints based on your current code.
                    </p>
                  </div>
                  
                  <div className={styles.optionsGrid}>
                    <div className={styles.optionCardPrimary}>
                      <Brain className={styles.optionIcon + ' text-violet-400'} />
                      <h4 className={styles.optionTitle}>View Approaches</h4>
                      <p className={styles.optionDescription}>Learn different solution strategies</p>
                    </div>
                    
                    <div className={styles.optionCardSecondary}>
                      <Lightbulb className={styles.optionIcon + ' text-amber-400'} />
                      <h4 className={styles.optionTitle}>Get Hints</h4>
                      <p className={styles.optionDescription}>Receive guided assistance</p>
                    </div>
                  </div>

                  <div className={styles.proTip}>
                    <div className={styles.proTipCard}>
                      <h4 className={styles.proTipTitle}>Pro Tip</h4>
                      <p className={styles.proTipText}>
                        Start by understanding different approaches before diving into implementation. Each approach offers unique insights into problem-solving strategies.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodingPlatform;