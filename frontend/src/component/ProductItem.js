import React, { useContext } from 'react';
import productContext from '../context/product/productContext';

const ProductItem = (props) => {
  const first = useContext(productContext)
  const { deleteProduct, getProductDetails } = first;
  const { item,viewProduct } = props;
  return (
    <>
      <tr>
        <td></td>
        <td>{item.name}</td>
        <td>{item.sku}</td>
        <td>{item.category}</td>
        <td>₹ {item.buyPrice}</td>
        <td>₹ {item.sellPrice}</td>
        <td>{item.quantity}</td>
        <td className='d-flex justify-content-evenly'>
          <button className='btn' onClick={() => {
            getProductDetails(item._id);
            viewProduct();
          }}><i className="bi bi-eye" ></i></button>
          <button className='btn'><i className="bi bi-pencil"></i></button>
          <button className='btn' onClick={() => {
            deleteProduct(item._id)
          }}><i className="bi bi-trash3"></i></button>
        </td>
      </tr>
    </>
  )
}

export default ProductItem