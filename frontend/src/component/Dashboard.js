import { useContext, useEffect } from "react";
import React from 'react';
import userContext from "../context/user/userContex";
import Product from "./Product";

const Dashboard = () => {
    const context = useContext(userContext)
    const { user, getUserDetails } = context;
    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="top d-flex justify-content-between">
                <h1>welcome {user.name}</h1>
                <button>logout</button>
            </div>
            <hr />
            <div className="status">
                <h2>Inventory Status</h2>
            </div>
            <hr />
            <div className="item">
                <h2>Inventory Item</h2>
                <Product />
            </div>

        </div>
    )
}

export default Dashboard