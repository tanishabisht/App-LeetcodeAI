import React from 'react';
import { Navbar } from '../components'
import mainImg from '../images/main.png'
import featureHintImg from '../images/feature-hint.png'
import featureUiImg from '../images/feature-ui.png'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate()

  const startCoding = () => {
    navigate('/problems')
  }

  return (
    <div className="landing-container">

      <Navbar />

      <main className="landing-main">

        <div className='hero-section'>
          <img src={mainImg} alt='hero' className='hero-img' />
          <div className='hero-content'>
            <h2 className='hero-title'>Optimize your coding skills <br/>with smart progressive hints</h2>
            <button className="hero-cta" onClick={startCoding}>Start Coding</button>
          </div>
        </div>

        <div className='feature-section'>
          <h2 className='feature-title'>What’s New?</h2>
          <div className='feature-list'>
            <img src={featureHintImg} alt="Progressive Hints" className="feature-icon" />
            <img src={featureUiImg} alt="Progressive Coding " className="feature-icon" />
          </div>
        </div>

      </main>

    </div>

  );
};

export default Landing;