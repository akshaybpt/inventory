import React, { useContext, } from 'react';
import productContext from '../context/product/productContext';
import ProductItem from './ProductItem';

const Product = () => {
    const firstContext = useContext(productContext);
    const { products } = firstContext;


    return (
        <>
            <section className="products mt-5">
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
                            return <ProductItem key={item._id} item={item} />
                        })}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Product