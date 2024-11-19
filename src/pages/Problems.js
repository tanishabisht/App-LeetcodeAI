import React from 'react'
import { Navbar } from '../components'
import { problems } from '../constant'
import { useNavigate } from 'react-router-dom'

const Problems = () => {

  const navigate = useNavigate()

  const onSolve = (prob) => {
    navigate('/coding/' + prob.id)
  }

  return (
    <div className="landing-container">
      <Navbar />

      <div className='problems-list'>
        {problems.map((prob,id) => (
          <div className='problem-card'>
            <p className='problem-title'>{prob.title}</p>
            <button onClick={() => onSolve(prob)} className='problem-btn'>Solve</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Problems
