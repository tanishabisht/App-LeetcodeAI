import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Circle, CheckCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';

const TopicsPage = () => {
  const [expandedTopic, setExpandedTopic] = useState('arrays');
  const navigate = useNavigate();

  const topics = [
    {
      id: 'arrays',
      title: 'Arrays & Hashing',
      description: 'Master fundamental array manipulation and hashing techniques',
      problemCount: 30,
      solved: 12,
      difficulty: { easy: 15, medium: 10, hard: 5 },
      problems: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          description: 'Find two numbers that add up to target',
          difficulty: 'easy',
          status: 'solved'
        },
        {
          id: 'contains-duplicate',
          title: 'Contains Duplicate',
          description: 'Find if array contains any duplicates',
          difficulty: 'easy',
          status: 'unsolved'
        },
        {
          id: 'group-anagrams',
          title: 'Group Anagrams',
          description: 'Group strings that are anagrams of each other',
          difficulty: 'medium',
          status: 'solved'
        },
        {
          id: 'top-k-frequent',
          title: 'Top K Frequent Elements',
          description: 'Find k most frequent elements in array',
          difficulty: 'medium',
          status: 'unsolved'
        }
      ]
    },
    {
      id: 'two-pointers',
      title: 'Two Pointers',
      description: 'Learn to solve problems using the two-pointer technique',
      problemCount: 20,
      solved: 8,
      difficulty: { easy: 8, medium: 8, hard: 4 },
      problems: [
        {
          id: 'valid-palindrome',
          title: 'Valid Palindrome',
          description: 'Check if string is palindrome after converting to lowercase and removing non-alphanumeric characters',
          difficulty: 'easy',
          status: 'solved'
        },
        {
          id: 'container-with-water',
          title: 'Container With Most Water',
          description: 'Find two lines that together with x-axis forms a container that holds the most water',
          difficulty: 'medium',
          status: 'unsolved'
        },
        {
          id: 'remove-duplicates',
          title: 'Remove Duplicates',
          description: 'Remove duplicates from sorted array in-place',
          difficulty: 'easy',
          status: 'unsolved'
        },
        {
          id: 'three-sum',
          title: 'Three Sum',
          description: 'Find all unique triplets that sum to zero',
          difficulty: 'medium',
          status: 'solved'
        }
      ]
    }
  ];

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