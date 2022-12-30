import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" >
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"></svg>
                    <span className="fs-4">Sidebar</span>
                </Link>
                <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-dark" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                DashBoard
                            </Link>
                        </li>
                        <li>
                            <Link to="/addproduct" className="nav-link link-dark">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Add Product
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link link-dark">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                view
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link link-dark">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link link-dark">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Customers
                            </Link>
                        </li>
                    </ul>
                    
                    </div>
            </div>
            )
}

            export default Sidebar