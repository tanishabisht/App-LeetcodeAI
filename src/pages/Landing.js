import React from 'react';
import { ChevronRight, Star, Book, Users, Code, GitBranch, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const startCoding = () => {
    navigate('/problems');
  };

  return (
    <div className="landing-container">
      {/* Navigation remains the same */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-brand">
            <span className="nav-logo">codepath</span>
            <span className="nav-beta">beta</span>
          </div>
          <div>
            <button className="nav-cta-secondary">My Notes</button>
            <button className="nav-cta" onClick={startCoding}>Start Learning</button>
          </div>
        </div>
      </nav>

      {/* Updated Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Coding
              <span className="hero-title-highlight">
                <span>Through Proven Patterns</span>
                <span className="hero-title-decoration"></span>
              </span>
            </h1>
            <p className="hero-description">
              A systematic bridge from classroom theory to interview-ready skills. 
              Transform your theoretical knowledge into practical problem-solving abilities.
            </p>
            <div className="hero-buttons">
              <button className="button-primary" onClick={startCoding}>
                Start Your Journey
              </button>
              <button className="button-secondary">
                See your notes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Community Section */}
      <section className="community">
        <div className="community-content">
          <div className="community-grid">
            <div className="community-image">
              <img 
                src="/api/placeholder/600/400" 
                alt="CS Student Journey" 
              />
            </div>
            <div className="community-text">
              <h2 className="community-title">Meet Alex, Your Fellow CS Student</h2>
              <p className="community-description">
                Like many sophomores, Alex excels in theoretical coursework but struggles
                with technical interviews. He knows the concepts but finds it challenging
                to apply them to real problems. Through structured learning and pattern
                recognition, he's building the bridge between classroom knowledge and
                practical problem-solving skills.
              </p>
              <button className="community-cta" onClick={startCoding}>
                Start Your Journey <Users className="community-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Features Section */}
      <section className="features">
        <div className="features-content">
          <h2 className="features-title">Why CodePath?</h2>
          
          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Code className="feature-icon" />
              </div>
              <h3 className="feature-card-title">Smart Templates</h3>
              <p className="feature-card-description">
                Access ready-to-use code templates and approaches, complete with 
                complexity analysis. Transform theoretical knowledge into practical solutions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Brain className="feature-icon" />
                </div>
              <h3 className="feature-card-title">Progressive Learning</h3>
              <p className="feature-card-description">
                Start with fundamentals and progress through increasingly complex patterns.
                Each topic builds on previous concepts, creating a solid foundation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <GitBranch className="feature-icon" />
              </div>
              <h3 className="feature-card-title">Structured Notes</h3>
              <p className="feature-card-description">
                Automatically compile your approaches, complexity analysis, and key concepts
                into organized revision notes. Never lose track of what you've learned.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;