import { useParams } from "react-router-dom"
import React, { useEffect, useContext } from 'react'
import productContext from "../context/product/productContext";

const ViewProduct = () => {
    const { id } = useParams();
    const context = useContext(productContext)
    const {productDetails, getProductDetails } = context;
    useEffect(() => {
        getProductDetails(id);
        // eslint-disable-next-line
    }, [])

    return (
        <div>{productDetails.name}</div>
    )
}

export default ViewProduct