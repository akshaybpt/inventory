import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../component/AddProduct';
import Dashboard from '../component/Dashboard';
import EditPassword from '../component/EditPassword';
import EditUser from '../component/EditUser';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import UpdateProduct from '../component/UpdateProduct';
import ViewProduct from '../component/ViewProduct';
import ViewUser from '../component/ViewUser'


const Home = () => {
  
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">

            <div className="productdiv">
            <Navbar />
            <Routes>
                <Route exact path={'/'} element={<Dashboard />} />
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
      </div>
    </div>
  )
}

export default Home