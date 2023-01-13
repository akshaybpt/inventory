import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Forget from './component/Forget';
import ResetPassword from './component/ResetPassword';
import Dashboard from './component/Dashboard';
import AddProduct from './component/AddProduct';
import ViewProduct from './component/ViewProduct';
import UpdateProduct from './component/UpdateProduct';
import ViewUser from './component/ViewUser';
import EditUser from './component/EditUser';
import EditPassword from './component/EditPassword';
import Sidebarr from './component/Sidebar';
import Land from './Land';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setLogin(true);
    }
  }, [])
  const [login, setLogin] = useState(false)

  return (
    <div className='app'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {login?
            <div className='d-flex'>
              <div className='flex-fill'>
                <Sidebarr />
              </div>
              <div className="productdiv flex-fill">
                <div className="container mt-3">
                  <Routes>
                    <Route exact path={'/dash'} element={<Dashboard />} />
                    <Route exact path={'/addproduct'} element={<AddProduct />} />
                    <Route exact path={'/product/:id'} element={<ViewProduct />} />
                    <Route exact path={'/updateproduct/:id'} element={<UpdateProduct />} />
                    <Route exact path={'/profile'} element={<ViewUser />} />
                    <Route exact path={'/editprofile'} element={<EditUser />} />
                    <Route exact path={'/editpassword'} element={<EditPassword />} />
                  </Routes>
                </div>
              </div>
            </div>
            :
            <>
            <Routes>
            <Route exact path="/" element={<Land />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/forget" element={<Forget />} />
              <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
            </Routes>
            </>
}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App