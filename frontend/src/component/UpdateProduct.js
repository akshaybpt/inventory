import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productContext from '../context/product/productContext'

const UpdateProduct = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(productContext)
  const { productDetails, updateProductDetails } = context
  const [img, setImg] = useState();
  const [data, setData] = useState({ id: id, name: productDetails.name, sku: productDetails.sku, category: productDetails.category, quantity: productDetails.quantity, buyPrice: productDetails.buyPrice, sellPrice: productDetails.sellPrice, description: productDetails.description });
  const handelSubmit = (e) => {
    e.preventDefault();
    updateProductDetails(data, img, id);
    navigate(`/product/${id}`);
  }

  const handelChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handelImgChange = (e) => {
    setImg({...img,[e.target.name]: e.target.files[0]})
  }
  console.log(img);
  return (
    <div>
      <div className="addproduct ">
        <div>
          <h1 className='text-center'>Update Product</h1>
          <form className='m-5 p-5' >
            <div className="mb-3">
              <label htmlFor="nametext" className="form-label">Name: </label>
              <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={handelChange} aria-describedby="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="sku" className="form-label">Sku: </label>
              <input type="text" className="form-control" id="sku" name='sku' value={data.sku} onChange={handelChange} aria-describedby="sku" />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category: </label>
              <input type="text" className="form-control" id="category" name='category' value={data.category} onChange={handelChange} aria-describedby="category" />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity: </label>
              <input type="number" className="form-control" id="quantity" value={data.quantity} onChange={handelChange} name='quantity' aria-describedby="quantity" />
            </div>
            <div className="mb-3">
              <label htmlFor="buyPrice" className="form-label">buyPrice: </label>
              <input type="number" className="form-control" id="buyPrice" value={data.buyPrice} onChange={handelChange} name='buyPrice' aria-describedby="buyPrice" />
            </div>
            <div className="mb-3">
              <label htmlFor="sellPrice" className="form-label">sellPrice: </label>
              <input type="number" className="form-control" id="sellPrice" value={data.sellPrice} onChange={handelChange} name='sellPrice' aria-describedby="sellPrice" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description: </label>
              <input type="text" className="form-control" id="description" name='description' value={data.description} onChange={handelChange} aria-describedby="description" />
            </div>
            <img src={img} alt={productDetails.name} width='200px' className='img-fluid mb-3' />
            <div className="form-group mb-3">
              <input type="file" name='photo' onChange={handelImgChange} />
            </div>
            <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct