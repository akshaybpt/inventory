import React, { useContext, useEffect } from 'react'
import userContext from '../context/user/userContex';

const Navbar = () => {
  // const navigate=useNavigation();

  const context = useContext(userContext)
  const { user, getUserDetails } = context;
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, [])
  const handelClick=()=>{
    localStorage.removeItem('auth-token')
    // navigate('/login');
  }
  return (
    <div>
      <div className="top d-flex justify-content-between">
        <h1>welcome {user.name}</h1>
        <button className='btn' onClick={handelClick}>logout</button>
      </div>
      <hr />
    </div>
  )
}

export default Navbar