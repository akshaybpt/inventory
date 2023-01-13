import React, { useState, useContext } from 'react';
import productContext from './productContext';
import axios from 'axios';
import alertContext from '../alert/alertContext';


const ProductState = (props) => {
  const context = useContext(alertContext);
  const { showAlert } = context;

  const host = ' http://localhost:8000';
  const productInitial = [
    {
      "_id": "63a2a78b725b3ace95e9b3cf",
      "user": "63a18abd1b9ef47eac3a3acf",
      "name": "asus vivobook",
      "sku": "bhcvhsahbcjsvch",
      "category": "laptop",
      "photo": "cjsbdcygsdbcjsd",
      "buyPrice": 20000,
      "sellPrice": 50000,
      "quantity": 10,
      "description": "wgfuyewgf",
      "date": "2022-12-21T06:28:18.602Z",
      "__v": 0
    }
  ];
  const detailsInitial = {
    "_id": "63a2a78b725b3ace95e9b3cf",
    "user": "63a18abd1b9ef47eac3a3acf",
    "name": "asus vivobook",
    "sku": "bhcvhsahbcjsvch",
    "category": "laptop",
    "photo": "cjsbdcygsdbcjsd",
    "buyPrice": 20000,
    "sellPrice": 50000,
    "quantity": 10,
    "description": "wgfuyewgf",
    "date": "2022-12-21T06:28:18.602Z",
    "__v": 0
  }
  const [products, setProducts] = useState(productInitial);
  const [productDetails, setProductDetails] = useState(detailsInitial)
  const getProduct = async () => {
    // api call
    const response = await fetch(`${host}/api/product/getproduct`, {
      method: 'Get', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    //logic
    const json = await response.json()
    //console.log(json)
    setProducts(json);
  }
  const deleteProduct = async (id) => {


    //api call
    const response = await fetch(`http://localhost:8000/api/product/deleteproduct/${id}`, {
      method: 'Delete', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
      // body data type must match "Content-Type" header
    });
    const json = await response.json()
    if (json.Sucess) {
      //logic
      showAlert("Product has been deleted", 'success');
    } else {
      showAlert('error', 'danger');
    }
    // to delete a product using the fillter function it will filter the product with the given id
    const newProduct = products.filter((item) => { return item._id !== id })
    setProducts(newProduct)
  }
  const getProductDetails = async (id) => {
    //api call
    const response = await fetch(`http://localhost:8000/api/product/productdetails/${id}`, {
      method: 'Get', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
      // body data type must match "Content-Type" header
    });
    const json = await response.json();
    setProductDetails(json);
    console.log(json);

  }


  const createProduct = async (data, img) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('sku', data.sku);
    formData.append('category', data.category);
    formData.append('quantity', data.quantity);
    formData.append('buyPrice', data.buyPrice);
    formData.append('sellPrice', data.sellPrice);
    formData.append('description', data.description);
    formData.append('photo', img);

    const response = await axios.post("http://localhost:8000/api/product/addproduct", formData, {
      headers: {
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    //console.log(response)
    // console.log(res.data.profileImg);
    if (response.data.sucess) {
      showAlert('Product has been created', 'success');
    } else {
      showAlert('error', 'danger',);
    }

  }
  const updateProductDetails = async (data, img, id) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('sku', data.sku);
    formData.append('category', data.category);
    formData.append('quantity', data.quantity);
    formData.append('buyPrice', data.buyPrice);
    formData.append('sellPrice', data.sellPrice);
    formData.append('description', data.description);
    formData.append('photo', img);

    const response = await axios.patch(`http://localhost:8000/api/product/updateproduct/${id}`, formData, {
      headers: {
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    //console.log(response)
    // console.log(response.data.sucess);
    if (response.data.sucess) {
      showAlert('Product has been updated', 'success');
    } else {
      showAlert('error', 'danger',);
    }


  }
  return (<productContext.Provider value={{ products, productDetails, getProduct, deleteProduct, getProductDetails, createProduct, updateProductDetails }}>
    {props.children}
  </productContext.Provider>)
}

export default ProductState;