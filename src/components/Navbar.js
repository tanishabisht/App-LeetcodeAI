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
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-brand" onClick={goLandingPage}>
          <span className="nav-logo">codepath</span>
          <span className="nav-beta">beta</span>
        </div>
        <div>
          <button className="nav-cta-secondary">My Notes</button>
          <button className="nav-cta" onClick={startCoding}>Start Learning</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
