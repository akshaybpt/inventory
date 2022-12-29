import React, { useContext } from 'react'
import productContext from '../context/product/productContext';

const ViewProduct = (props) => {
    const viewProduct = useContext(productContext)
    const { productDetails } = viewProduct;
   
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button ref={props.vProduct} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"> {productDetails.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <img src={productDetails.photo} alt={productDetails.name} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct