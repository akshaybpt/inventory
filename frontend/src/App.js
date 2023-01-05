import React, { useEffect,useState } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Signup from './component/Signup';
import Home from './page/Home';
import Login from './component/Login';
import Forget from './component/Forget';
import ResetPassword from './component/ResetPassword';
import LandingPage from './page/LandingPage';

const App = () => {
  useEffect(() => {
    if(localStorage.getItem('auth-token')){
      setLogin(true);
    }
  }, [])
  const [login, setLogin] = useState(false)
  
  return (
    <div>
      
      
        
        {login?<Home/>:<LandingPage/>}
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forget" element={<Forget />} />
            <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
          </Routes>
        
        
    </div>
  )
}
export default App