// LandingPage.js

import React from 'react';
import { Users, Code, GitBranch, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import styles from './LandingPage.module.css';
import alexImg from '../../images/alex.jpeg'

const LandingPage = () => {
  const navigate = useNavigate();

  const startCoding = () => {
    navigate('/problems');
  };

  const seeNotes = () => {
    navigate('/notes');
  };

  const features = [
    {icon: <Brain className={styles.featureIcon} />, name: "Progressive Hints", desc: "Smart hints adapt to your code, guiding you to the solution while teaching you how to think."},
    {icon: <Brain className={styles.featureIcon} />, name: "Knowledge Bank", desc: "Every problem you solve becomes a permanent part of your learning library. Review your solutions, different approaches, complexity analysis, and personal notes anytime - perfect for interview prep or quick refreshers."},
    {icon: <Brain className={styles.featureIcon} />, name: "Multiple Approaches", desc: "Understand multiple solutions - from brute force to optimal - and learn when to use each."}
  ]

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
              From Theory to Mastery
              <span className={styles.heroTitleHighlight}>
                <span>One Hint at a Time</span>
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
            <img 
              className={styles.communityImage}
              src={alexImg}
              alt="CS Student Journey" 
            />
            <div className={styles.communityText}>
              <h2 className={styles.communityTitle}>Meet Alex, Your Fellow CS Student</h2>
              <p className={styles.communityDescription}>
                Like many sophomores, Alex excels in theoretical coursework but struggles with 
                technical interviews. He knows the concepts but finds it challenging to apply 
                them to coding problems. <b>CodePath</b> builds the bridge between classroom knowledge 
                and practical problem-solving skills through <b>structured learning</b> and <b>active recall</b>, 
                helping students like Alex master technical interviews with confidence.
              </p>
              <button className={styles.communityCta} onClick={startCoding}>
                Start Your Journey <Users className={styles.communityIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>Why CodePath?</h2>
          
          <div className={styles.featuresGrid}>

            {features.map((feature, id) => <div key={id} className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureCardTitle}>{feature.name}</h3>
              <p className={styles.featureCardDescription}>
                {feature.desc}
              </p>
            </div>)}
          </div>
        </div>
    </section>
    </div>
  );
};

export default LandingPage;