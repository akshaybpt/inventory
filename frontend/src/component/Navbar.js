import React, { useContext } from 'react'
import userContext from '../context/user/userContex';
import { Link } from 'react-router-dom';
const Navbar = () => {
  // const navigate=useNavigation();

  const context = useContext(userContext)
  const { user } = context;

  const handelClick = () => {
    localStorage.removeItem('auth-token')
    window.location.reload();

  }
  return (
    <>
      <div className="mt-1 d-flex justify-content-between">
        <h1>Welcome {user.name}</h1>
        <Link className='btn btn-danger' onClick={handelClick} to="/login">logout</Link>
      </div>
      <hr />
    </>
  )
}

export default Navbar