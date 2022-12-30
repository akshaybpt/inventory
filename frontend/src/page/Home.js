import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../component/AddProduct';
import Dashboard from '../component/Dashboard';
import Sidebar from '../component/Sidebar';
import UpdateProduct from '../component/UpdateProduct';
import About from './About';

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
              <Routes>
                <Route exact path={'/'} element={<Dashboard />} />
                <Route exact path={'/about'} element={<About />} />
                <Route exact path={'/addproduct'} element={<AddProduct />} />
                <Route exact path={"/updateProduct"} element={<UpdateProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home