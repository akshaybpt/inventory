import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import productContext from '../context/product/productContext';


const AddProduct = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const context = useContext(productContext);
    const { createProduct } = context;
    const [img, setImg] = useState('');
    const [data, setData] = useState({ name: "", sku: "", category: "", quantity: "", buyPrice: "", sellPrice: "", description: "" });
    const handelSubmit = (e) => {

        e.preventDefault();
        createProduct(data, img);

    }

    const handelChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handelImgChange = (e) => {
        setImg(e.target.files[0])
    }
    return (
        <div>
            <div className="addproduct ">
                <div>
                    <h1 className='text-center'>Add Product</h1>
                    <form className='m-5 p-5' >
                        <div className="mb-3">
                            <label htmlFor="nametext" className="form-label">Name: </label>
                            <input type="text" className="form-control" id="name" name='name' onChange={handelChange} aria-describedby="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sku" className="form-label">Sku: </label>
                            <input type="text" className="form-control" id="sku" name='sku' onChange={handelChange} aria-describedby="sku" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category: </label>
                            <input type="text" className="form-control" id="category" name='category' onChange={handelChange} aria-describedby="category" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity: </label>
                            <input type="number" className="form-control" id="quantity" onChange={handelChange} name='quantity' aria-describedby="quantity" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="buyPrice" className="form-label">buyPrice: </label>
                            <input type="number" className="form-control" id="buyPrice" onChange={handelChange} name='buyPrice' aria-describedby="buyPrice" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sellPrice" className="form-label">sellPrice: </label>
                            <input type="number" className="form-control" id="sellPrice" onChange={handelChange} name='sellPrice' aria-describedby="sellPrice" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description: </label>
                            <input type="text" className="form-control" id="description" name='description' onChange={handelChange} aria-describedby="description" />
                        </div>
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

export default AddProduct