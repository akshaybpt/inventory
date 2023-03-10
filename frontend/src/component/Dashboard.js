import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import productContext from '../context/product/productContext';
import userContext from '../context/user/userContex';
import Product from "./Product";

const Dashboard = () => {
  const context1 = useContext(userContext)
  const context2 = useContext(productContext)
  const { getProduct } = context2
  const { getUserDetails } = context1

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate('/login')
    }
    getProduct();
    getUserDetails();
    // eslint-disable-next-line
  }, [])
  return (
    
      <div className="item">
        <h2>Inventory Status</h2>
        <div className="box">
         
        </div>
        <h2>Inventory Item</h2>
        <hr />
        <Product />
      </div>
      
  )
}

export default Dashboard