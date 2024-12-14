import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Circle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import styles from './ProblemsPage.module.css';

const ProblemsPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [topics, setTopics] = useState([]);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch('http://localhost:3001/topics');
      const data = await response.json();
      setTopics(data);

      // Calculate derived statistics
      const totalProblems = data.reduce((acc, topic) => acc + topic.problems.length, 0);
      const totalSolved = data.reduce((acc, topic) => 
        acc + topic.problems.filter(problem => problem.status === 'solved').length, 0);
      const difficultyStats = data.reduce((acc, topic) => {
        topic.problems.forEach(problem => {
          acc[problem.difficulty] = (acc[problem.difficulty] || 0) + 1;
        });
        return acc;
      }, {});

      setStats({
        totalProblems,
        totalSolved,
        progress: (totalSolved / totalProblems) * 100,
        ...difficultyStats
      });
    };

    fetchTopics();
  }, []);

  const getStatusIcon = (status) => {
    return status === 'solved' ? 
      <CheckCircle className={styles.statusSolved} /> : 
      <Circle className={styles.statusUnsolved} />;
  };

  const onSolve = (problemId) => {
    navigate('/coding/' + problemId);
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
                Total problems solved: {stats.totalSolved}/{stats.totalProblems}
              </p>
            </div>
            <div className={styles.topicsMastered}>
              Topics Mastered: {topics.filter(topic => 
                topic.problems.every(problem => problem.status === 'solved')).length}
            </div>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${stats.progress || 0}%` }}
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
                    <span>{topic.problems.filter(p => p.status === 'solved').length}/{topic.problems.length}</span>
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
