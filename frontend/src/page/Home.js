import React from 'react'
import Navbar from '../component/Navbar'
import Product from '../component/Product'
import Sidebar from '../component/Sidebar'

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Navbar />
            <div className="productdiv">
            <Product />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home