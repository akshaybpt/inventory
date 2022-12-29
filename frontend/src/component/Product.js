import React, { useEffect, useContext, useRef } from 'react';
import productContext from '../context/product/productContext';
import ProductItem from './ProductItem';
import ViewProduct from './ViewProduct';
const Product = () => {
    const firstContext = useContext(productContext);
    const { products, getProduct } = firstContext;

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
    }, [])
    const vProduct = useRef(null)
    // const refClose = useRef(null)
    const viewProduct = () => {
        // console.log('ref clicked');
        vProduct.current.click();
    }
    return (
        <>
            <section className="products mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-striped table-hover css-serial">
                                <thead>
                                    <tr>
                                        <th scope='col'>Sno.</th>
                                        <th scope='col'>Product Name</th>
                                        <th scope='col'>SKU</th>
                                        <th scope='col'>Category </th>
                                        <th scope='col'>Buy Price</th>
                                        <th scope='col'>Sell Price</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) => {
                                        return <ProductItem key={item._id} item={item} viewProduct={viewProduct} />

                                    })}
                                </tbody>
                            </table>
                            <ViewProduct vProduct={vProduct} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product