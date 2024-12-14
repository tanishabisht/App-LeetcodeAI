import React from 'react';
import { Users, Code, GitBranch, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const startCoding = () => {
    navigate('/problems');
  };

  const seeNotes = () => {
    navigate('/notes');
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBlob1}></div>
          <div className={styles.heroBlob2}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Master Coding
              <span className={styles.heroTitleHighlight}>
                <span>Through Proven Patterns</span>
                <span className={styles.heroTitleDecoration}></span>
              </span>
            </h1>
            <p className={styles.heroDescription}>
              A systematic bridge from classroom theory to interview-ready skills. 
              Transform your theoretical knowledge into practical problem-solving abilities.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.buttonPrimary} onClick={startCoding}>
                Start Your Journey
              </button>
              <button className={styles.buttonSecondary} onClick={seeNotes}>
                See your notes
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* COMMUNITY SECTION */}
      <section className={styles.community}>
        <div className={styles.communityContent}>
          <div className={styles.communityGrid}>
            <div className={styles.communityImage}>
              <img 
                src="/api/placeholder/600/400" 
                alt="CS Student Journey" 
              />
            </div>
            <div className={styles.communityText}>
              <h2 className={styles.communityTitle}>Meet Alex, Your Fellow CS Student</h2>
              <p className={styles.communityDescription}>
                Like many sophomores, Alex excels in theoretical coursework but struggles
                with technical interviews. He knows the concepts but finds it challenging
                to apply them to real problems. Through structured learning and pattern
                recognition, he's building the bridge between classroom knowledge and
                practical problem-solving skills.
              </p>
              <button className={styles.communityCta} onClick={startCoding}>
                Start Your Journey <Users className={styles.communityIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>Why CodePath?</h2>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Code className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Smart Templates</h3>
              <p className={styles.featureCardDescription}>
                Access ready-to-use code templates and approaches, complete with 
                complexity analysis. Transform theoretical knowledge into practical solutions.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Brain className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Progressive Learning</h3>
              <p className={styles.featureCardDescription}>
                Start with fundamentals and progress through increasingly complex patterns.
                Each topic builds on previous concepts, creating a solid foundation.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <GitBranch className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Structured Notes</h3>
              <p className={styles.featureCardDescription}>
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