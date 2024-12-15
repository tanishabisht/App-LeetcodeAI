// CodingPlatformPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CodingPlatformPage.module.css';
import { Navbar } from '../../components';
import { ProblemCard, CodeSection, ThirdHelpSection, ThirdSmartHints, ThirdProblemApproaches } from './components'

const CodingPlatform = () => {
  const { topicid, queid } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('def solution():\n    print("hiii")\nsolution()');

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
            <ProblemCard problem={problem} />
          </div>

          {/* Editor Section */}
          <div className={styles.editorSection}>
            <CodeSection problem={problem} code={code} setCode={setCode} />
          </div>

          {/* Right Panel - Hints/Approaches */}
          <div className={styles.infoPanel}>
            <ThirdHelpSection />
            <ThirdSmartHints code={code} problemTitle={problem.title} />
            <ThirdProblemApproaches approaches={problem.approaches} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodingPlatform;
