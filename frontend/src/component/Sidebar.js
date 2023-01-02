import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" >
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"></svg>
                    <span className="fs-4">Inventory</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-dark" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            DashBoard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addproduct" className="nav-link link-dark">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Add Product
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className="accordion " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Account
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className="nav nav-pills flex-column mb-auto">
                                            <li className="nav-item">
                                                <Link to="/profile" className="nav-link link-dark">
                                                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                                    Profile
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/editprofile" className="nav-link link-dark">
                                                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                                    Edit Profile
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/editpassword" className="nav-link link-dark">
                                                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                                    Edit Password
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar