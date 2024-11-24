import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()

  const startCoding = () => {
    navigate('/problems')
  }

  const goLandingPage = () => {
    navigate('/')
  }

  return (
    <header className="navbar">
        <h1 onClick={goLandingPage} className='navbar-logo'>Leetcode AI</h1>
        <button className="navbar-cta" onClick={startCoding}>Start Coding</button>
    </header>
  )
}

export default Navbar
