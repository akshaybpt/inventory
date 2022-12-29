import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Message = () => {
    let navigate = useNavigate
    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 2000)
        // eslint-disable-next-line
    }, [])

    // const changePage=()=>{
    //     setInterval(() => {
    //         navigate('/login')
    //       }, 1000);
    // }


    return (
        <div>
            <h1> Reset link has been sent to your email
                click and reset your password
            </h1>
        </div>
    )
}

export default Message