import React,{useContext} from 'react'
import productContext from '../context/product/productContext'

const UpdateProduct = () => {
    const context=useContext(productContext)
    const {productDetails}=context
  return (
    <div>
{productDetails.name}
    </div>
  )
}

export default UpdateProduct