import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
        <button className='btn'><Link to="/login">Login</Link></button>
        <button className='btn'><Link to="/signup">Signup</Link></button>
    </div>
  )
}

export default LandingPage