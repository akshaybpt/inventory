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

    


    return (
        <div>
            <h1> Reset link has been sent to your email
                click and reset your password
            </h1>
        </div>
    )
}

export default Message