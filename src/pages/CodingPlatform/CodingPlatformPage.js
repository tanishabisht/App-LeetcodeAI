// CodingPlatformPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Zap, Brain, Code2, Lightbulb } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import styles from './CodingPlatformPage.module.css';
import { Navbar } from '../../components';
import axios from 'axios'

const CodingPlatform = () => {
  const { topicid, queid } = useParams();
  const [problem, setProblem] = useState(null);
  const [activePanel, setActivePanel] = useState(null);
  const [userNote, setUserNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('def solution():\n    pass');
  const [output, setOutput] = useState('Output text here...');
  const [previousHints, setPreviousHints] = useState([]);

  const handleRun = async () => {
    try {
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/executeCode', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleGetHint = async () => {
    try {
      console.log(problem.title, code, previousHints)
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/getHint', {
        problem_statement: problem.title,
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

  const handleMarkComplete = () => {
    console.log('hahaha')
  }

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch(`http://localhost:3001/topics/${topicid}`);
        const topic = await response.json();
        const foundProblem = topic.problems.find((p) => p.id === queid);
        setProblem(foundProblem || null);
      } catch (error) {
        console.error('Error fetching problem data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [topicid, queid]);

  const renderInfoPanel = () => {
    if (!problem) return null;

    switch (activePanel) {
      case 'hints':
        return (
          <div className={styles.hintPanel}>
            <h2 className={styles.hintPanelTitle}>
              <Lightbulb className="text-amber-500" />
              Smart Hints
            </h2>
            <p className={styles.hintText}>Hints can be customized based on the problem details.</p>
            <br/>
            <button onClick={handleGetHint} className={styles.runButton}>Get Hint</button>
            <br/>
            <br/>
            
              {previousHints.map((hint, index) => (
                <p key={index} className="hints-display__hint">
                  <strong>Hint {index + 1}:</strong> {hint}
                </p>
              ))}
          </div>
        );
      case 'approach':
        return (
          <div className={styles.hintPanel}>
            <h2 className={styles.hintPanelTitle}>
              <Zap className="text-violet-500" />
              Problem Approaches
            </h2>
            <div className={styles.algorithmInfo}>
              {problem.approaches.map((approach, index) => (
                <div key={index} className={styles.approachCard}>
                  <h3>{approach.name}</h3>
                  <ul>
                    {approach.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Time Complexity:</strong> {approach.complexity.time}
                  </p>
                  <p>
                    <strong>Space Complexity:</strong> {approach.complexity.space}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
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
        );
    }
  };

  if (loading) {
    return <div>Loading problem...</div>;
  }

  if (!problem) {
    return <div>Problem not found!</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.mainContent}>

          {/* Left Panel - Problem Details */}
          <div className={styles.leftPanel}>
            <div className={styles.problemCard}>
              <h1 className={styles.problemTitle}>{problem.title}</h1>
              <p className={styles.problemDescription}>{problem.description}</p>

              <h3 className={styles.constraintsTitle}>Constraints:</h3>
              <ul className={styles.constraintsList}>
                {problem.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>

              <h3 className={styles.examplesTitle}>Examples:</h3>
              {problem.examples.map((example, index) => (
                <div key={index} className={styles.exampleCard}>
                  <p>
                    <strong>Input:</strong> {example.input}
                  </p>
                  <p>
                    <strong>Output:</strong> {example.output}
                  </p>
                  <p>
                    <strong>Explanation:</strong> {example.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons to Show Hints or Approaches */}
            <button
              onClick={() => setActivePanel('hints')}
              className={styles.hintButton}
            >
              <Lightbulb className="text-amber-500" />
              Get Hints
              <ChevronRight className="text-slate-400" />
            </button>

            <button
              onClick={() => setActivePanel('approach')}
              className={styles.approachButton}
            >
              <Brain className="text-violet-500" />
              View Approaches
              <ChevronRight className="text-slate-400" />
            </button>

            <button
              onClick={() => handleMarkComplete()}
              className={styles.approachButton}
            >
              Mark as Complete
            </button>
          </div>

          {/* Editor Section */}
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2 className={styles.editorTitle}>Python Solution</h2>
              <button onClick={handleRun} className={styles.runButton}>Run Code</button>
            </div>

            <CodeMirror
              value={code}
              height="100%"
              extensions={[python()]}
              onChange={(value) => setCode(value)}
              placeholder="Write your Python code here..."
              className={styles.codeArea}
            />

            <div className={styles.editorFooter}>

              <div className={styles.outputSection}>
                <h3>Output Console:</h3>
                <pre className={styles.outputText}>{output}</pre>
              </div>
              
              <div className={styles.notesSection}>
                <h3>Notes:</h3>
                <textarea
                  placeholder="Add your notes here..."
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Hints/Approaches */}
          <div className={styles.infoPanel}>{renderInfoPanel()}</div>

        </div>
      </main>
    </div>
  );
};

export default CodingPlatform;
