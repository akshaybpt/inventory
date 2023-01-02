import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('auth-token')){
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])
    
    const [credientials, setCredientials] = useState({ email: "", password: "" })
    const handelSubmit =async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credientials.email, password: credientials.password })
        });
        const json = await response.json()
        // console.log(json);
        // console.log(json.authToken);
        if (json.sucess) {
            localStorage.setItem('auth-token', json.authToken);
            navigate('/');
        }
    }
    const handelChange = (e) => {
        setCredientials({ ...credientials, [e.target.name]: e.target.value });
    }
    const handelForget = () => {
        navigate('/forget');
    }
    const handelRegister = () => {
        navigate('/signup');
    }

    return (
        <div className='login'>
            <div className="container  ">
                <div className="row">
                    <div className="col-md-12">
                        <div className='loginpage my-5 pb-5'>
                            <h1>Please login</h1>
                            <form className='loginform'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={handelChange} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' onChange={handelChange} id="exampleInputPassword1" />
                                </div>
                                <p className="text">
                                    Don't have an account <button className='btn btn-outline-info' onClick={handelRegister}>Register</button>
                                </p>
                                <p className="text">
                                    Don't remeber the password <button className='btn btn-outline-info' onClick={handelForget}>Forget Password</button>
                                </p>

                                <div>
                                    <Link type="submit" onClick={handelSubmit} className="btn btn-primary" to="/">Submit</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login