import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import ViewProduct from './component/ViewProduct';
import Signup from './component/Signup';
import ViewUser from './component/ViewUser';
import ProductState from './context/product/ProductState';
import About from './page/About';
import Home from './page/Home';
import Login from './component/Login';
import Forget from './component/Forget';
import Message from './component/Message';
import ResetPassword from './component/ResetPassword';
import AddProduct from './component/AddProduct';
import Sidebar from './component/Sidebar';

const App = () => {

  return (
    <div>
      {/* <AddProduct />  */}
      <ProductState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forget" element={<Forget />} />
            <Route exact path="/msg" element={<Message />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
          </Routes>
        </Router>
      </ProductState>
    </div>
  )
}

export default App