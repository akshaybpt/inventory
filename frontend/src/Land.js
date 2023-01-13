import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Land = () => {
    const navigate=useNavigate();
    useEffect(() => {
    if(localStorage.getItem('auth-token')){
        navigate('/dash');
    }
    // eslint-disable-next-line
    }, [])
    
  return (
    <div>welcome to Inventory 
        please login or signup to continue
        <Link to='/login'>login</Link>
        <Link to='/signup'>signup</Link>
    </div>
  )
}

export default Land