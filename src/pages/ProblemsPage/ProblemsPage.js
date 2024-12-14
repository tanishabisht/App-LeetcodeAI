// Problems.js

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Circle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { topics } from '../../constant'

const TopicsPage = () => {
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
      <CheckCircle className="status-icon status-solved" /> : 
      <Circle className="status-icon status-unsolved" />;
  };

  return (
    <div className="topics-container">
      <Navbar />

      <main className="topics-main">
        {/* Overall Progress */}
        <div className="progress-card">
          <div className="progress-header">
            <div className="progress-info">
              <h2 className="progress-title">Main Progress</h2>
              <p className="progress-stats">
                Total problems solved: {totalSolved}/{totalProblems}
              </p>
            </div>
            <div className="topics-mastered">
              Topics Mastered: <span>4</span>
            </div>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Topics List */}
        <div className="topics-list">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <button 
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className="topic-header"
              >
                <div className="topic-main">
                  {expandedTopic === topic.id ? 
                    <ChevronDown className="topic-icon" /> : 
                    <ChevronRight className="topic-icon" />
                  }
                  <div className="topic-info">
                    <h2 className="topic-title">{topic.title}</h2>
                    <p className="topic-description">{topic.description}</p>
                  </div>
                </div>
                <div className="topic-stats">
                  <div className="topic-progress">
                    <CheckCircle className="progress-icon" />
                    <span>{topic.solved}/{topic.problemCount}</span>
                  </div>
                  <div className="difficulty-badges">
                    <span className="badge badge-easy">
                      {topic.difficulty.easy} Easy
                    </span>
                    <span className="badge badge-medium">
                      {topic.difficulty.medium} Medium
                    </span>
                    <span className="badge badge-hard">
                      {topic.difficulty.hard} Hard
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded Content - Problem List */}
              {expandedTopic === topic.id && (
                <div className="topic-content">
                    {topic.problems.map((problem) => (
                      <div key={problem.id} className="problem-card">
                        <div className="problem-info">
                          {getStatusIcon(problem.status)}
                          <div className="problem-details">
                            <h4 className="problem-title">{problem.title}</h4>
                            <p className="problem-description">
                              {problem.description}
                            </p>
                          </div>
                          <span className={`badge badge-${problem.difficulty}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <button 
                          className="solve-button"
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

export default TopicsPage;