import React, { useEffect, useContext } from 'react'
import userContext from '../context/user/userContex';

const ViewUser = () => {
    const context = useContext(userContext);
    const { user, getUserDetails } = context;
    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line 
    }, []);
    return (
        <div>
            <div className="userdetails">
                <div className="conatiner">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={user.photo} alt={user.photo} className='img-fluid ms-3' />
                        </div>
                        <div className="col-md-8">
                            <div className='mt-5'>
                                <h5>Name: {user.name}</h5>
                                <h5>Email: {user.email}</h5>
                                <h5>Phone no: {user.phone}</h5>
                                <h5>Bio: {user.bio}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser