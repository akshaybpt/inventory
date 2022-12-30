import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import productContext from '../context/product/productContext'

const UpdateProduct = () => {
  const {id}=useParams();
  const context = useContext(productContext)
  const { productDetails } = context
  return (
    <div>
      {id}
    </div>
  )
}

export default UpdateProduct