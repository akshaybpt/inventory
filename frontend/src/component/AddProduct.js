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
        <>
            <div className="container ">
                <div className="vh-100 d-flex justify-content-center align-items-center  ">
                    <div className="col-md-10 p-5 shadow-sm border rounded-5  bg-white">
                        <h2 className="text-center mb-4 ">Add Product </h2>
                        <form  >
                            <div className="row">
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="nametext" className="form-label">Name: </label>
                                    <input type="text" className="form-control" id="name" name='name' onChange={handelChange} aria-describedby="name" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="sku" className="form-label">Sku: </label>
                                    <input type="text" className="form-control" id="sku" name='sku' onChange={handelChange} aria-describedby="sku" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="category" className="form-label">Category: </label>
                                    <input type="text" className="form-control" id="category" name='category' onChange={handelChange} aria-describedby="category" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="quantity" className="form-label">Quantity: </label>
                                    <input type="number" className="form-control" id="quantity" onChange={handelChange} name='quantity' aria-describedby="quantity" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="buyPrice" className="form-label">buyPrice: </label>
                                    <input type="number" className="form-control" id="buyPrice" onChange={handelChange} name='buyPrice' aria-describedby="buyPrice" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="sellPrice" className="form-label">sellPrice: </label>
                                    <input type="number" className="form-control" id="sellPrice" onChange={handelChange} name='sellPrice' aria-describedby="sellPrice" required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="description" className="form-label">Description: </label>
                                    <input type="text" className="form-control" id="description" name='description' onChange={handelChange} aria-describedby="description" required />
                                </div>
                                <div className="col-sm-6 form-group mb-3">
                                    <label htmlFor="img" className='form-label'>Product img</label>
                                    <input type="file" name='photo' className='form-control' onChange={handelImgChange} aria-describedby="img" required />
                                </div>
                                <div className='col-sm-12 mb-3 form-group '>
                                    <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct