import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import productContext from '../context/product/productContext';

const ProductItem = (props) => {
  const navigate = useNavigate();
  const first = useContext(productContext)
  const { deleteProduct  } = first;
  const { item } = props;
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
           //console.log(item._id);
            navigate(`/product/${item._id.toString()}`);
          }}> <i className="bi bi-eye" ></i></button>

          <button className='btn' onClick={() => {
            //console.log(item._id);
            navigate(`/updateproduct/${item._id.toString()}`);
          }}><i className="bi bi-pencil"></i></button>
          
          <button className='btn' onClick={() => {
            deleteProduct(item._id)
          }}><i className="bi bi-trash3"></i></button>
        </td>
      </tr>
    </>
  )
}

export default ProductItem