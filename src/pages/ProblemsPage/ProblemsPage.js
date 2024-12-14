import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Circle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { topics } from '../../constant';
import styles from './ProblemsPage.module.css';

const ProblemsPage = () => {
  const [expandedTopic, setExpandedTopic] = useState('arrays');
  const navigate = useNavigate();

  const totalSolved = topics.reduce((acc, topic) => acc + topic.solved, 0);
  const totalProblems = topics.reduce((acc, topic) => acc + topic.problemCount, 0);
  const progressPercentage = (totalSolved / totalProblems) * 100;

  const onSolve = (problemId) => {
    navigate('/coding/' + problemId);
  };

  const getStatusIcon = (status) => {
    return status === 'solved' ? 
      <CheckCircle className={styles.statusSolved} /> : 
      <Circle className={styles.statusUnsolved} />;
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* Overall Progress */}
        <div className={styles.progressCard}>
          <div className={styles.progressHeader}>
            <div className={styles.progressInfo}>
              <h2 className={styles.progressTitle}>Main Progress</h2>
              <p className={styles.progressStats}>
                Total problems solved: {totalSolved}/{totalProblems}
              </p>
            </div>
            <div className={styles.topicsMastered}>
              Topics Mastered: <span>4</span>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Topics List */}
        <div className={styles.topicsList}>
          {topics.map((topic) => (
            <div key={topic.id} className={styles.topicCard}>
              <button 
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className={styles.topicHeader}
              >
                <div className={styles.topicMain}>
                  {expandedTopic === topic.id ? 
                    <ChevronDown className={styles.topicIcon} /> : 
                    <ChevronRight className={styles.topicIcon} />
                  }
                  <div className={styles.topicInfo}>
                    <h2 className={styles.topicTitle}>{topic.title}</h2>
                    <p className={styles.topicDescription}>{topic.description}</p>
                  </div>
                </div>
                <div className={styles.topicStats}>
                  <div className={styles.topicProgress}>
                    <CheckCircle className={styles.progressIcon} />
                    <span>{topic.solved}/{topic.problemCount}</span>
                  </div>
                  <div className={styles.difficultyBadges}>
                    <span className={styles.badgeEasy}>
                      {topic.difficulty.easy} Easy
                    </span>
                    <span className={styles.badgeMedium}>
                      {topic.difficulty.medium} Medium
                    </span>
                    <span className={styles.badgeHard}>
                      {topic.difficulty.hard} Hard
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded Content - Problem List */}
              {expandedTopic === topic.id && (
                <div className={styles.topicContent}>
                  {topic.problems.map((problem) => (
                    <div key={problem.id} className={styles.problemCard}>
                      <div className={styles.problemInfo}>
                        {getStatusIcon(problem.status)}
                        <div className={styles.problemDetails}>
                          <h4 className={styles.problemTitle}>{problem.title}</h4>
                          <p className={styles.problemDescription}>
                            {problem.description}
                          </p>
                        </div>
                        <span className={styles[`badge${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}`]}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <button 
                        className={styles.solveButton}
                        onClick={() => onSolve(problem.id)}
                      >
                        {problem.status === 'solved' ? 'Review' : 'Solve'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProblemsPage;