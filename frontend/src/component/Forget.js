import React, { useState, useEffect, useContext } from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContex';
const Forget = () => {
    const constext = useContext(userContext);
    const { showAlert } = constext;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            navigate('/dash');
            showAlert('logout first', 'danger');
           
        }
        // eslint-disable-next-line
    }, [])


    const handelChange = (e) => {
        setEmail(e.target.value)
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/forgetpassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const json = await response.json();
        //console.log(json);
        if (json.success) {
            showAlert('email has been sent to your emailid', 'success');
            navigate('/login')
        }

    }
    return (
        <>
            <div className='container'>
                <div className="vh-100 d-flex justify-content-center align-items-center forgetPage ">
                    <div className="col-md-5 p-5 shadow-sm border rounded-5  bg-white">
                        <h1 className="text-center mb-4 "> <BsFillShieldLockFill /></h1>
                        <h2 className="text-center">Forgot Password?</h2>
                        <p className="text-center">You can reset your password here.</p>
                        <form>
                            <div className=" input-group mb-3">
                                <span className='fs-3 px-1 border text-white'><AiOutlineMail /></span>
                                <input type="email" htmlFor='email' className="form-control border" placeholder='email address' onChange={handelChange} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" onClick={handelSubmit} type="submit">Reset Password</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget