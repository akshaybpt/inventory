import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Signup from './component/Signup';
import ProductState from './context/product/ProductState';
import About from './page/About';
import Home from './page/Home';
import Login from './component/Login';
import Forget from './component/Forget';
import ResetPassword from './component/ResetPassword';
import UserState from './context/user/UserState';


const App = () => {

  return (
    <div>
      <UserState>
      <ProductState>
        <Router>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forget" element={<Forget />} />
            <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
           
          </Routes>
          <Home />
        </Router>
        
      </ProductState>
      </UserState>
    </div>
  )
}
export default App