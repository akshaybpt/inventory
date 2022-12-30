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
            name: {user.name}
            <br />
            img:   <img src={user.photo} alt={user.photo} className="img-fluid" width={50} />
            <br />
        </div>
    )
}

export default ViewUser