import React from 'react';
import Product from "./Product";

const Dashboard = () => {
    

    return (
        <div>
          <div className="conatiner">
            <div className="status">
                <h2>Inventory Status</h2>
            </div>
            <hr />
            <div className="item">
                <h2>Inventory Item</h2>
                <Product />
            </div>
            </div>
        </div>
    )
}

export default Dashboard