import { useParams } from "react-router-dom"
import React, { useEffect, useContext } from 'react'
import productContext from "../context/product/productContext";

const ViewProduct = () => {
    const { id } = useParams();
    const context = useContext(productContext)
    const { productDetails, getProductDetails } = context;
    useEffect(() => {
        getProductDetails(id);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h2>Product Details</h2>
            <div className="productdetails ">
                <div className="card " style={{ 'width': '50%' }}>
                    <img src={productDetails.photo} className="card-img-top img-fluid" alt={productDetails.name} width='50%' />
                    <div className="card-body ">
                        <h5 className="card-title">Name: {productDetails.name}</h5>
                        <h5 className="card-title">Sku:  {productDetails.sku}</h5>
                        <h5 className="card-title">Category:  {productDetails.category}</h5>
                        <h5 className="card-title">Quantity:  {productDetails.quantity}</h5>
                        <h5 className="card-title">Buy Price:  {productDetails.buyPrice}</h5>
                        <h5 className="card-title">Sell Price:  {productDetails.sellPrice}</h5>
                        <h5 className="card-title">Description:  {productDetails.description}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct