import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
        <Link className='btn btn-primary' to="/login">Login</Link>
         <Link className='btn btn-primary m-2' to="/signup">Signup</Link>
    </div>
  )
}

export default LandingPage