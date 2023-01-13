import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    const [credientials, setCredientials] = useState({ email: "", password: "" })
    const handelSubmit = async (e) => {
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
            navigate('/dash');
        }
    }
    const handelChange = (e) => {
        setCredientials({ ...credientials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container'>
                <div className="vh-100 d-flex justify-content-center align-items-center loginPage ">
                    <div className="col-md-5 p-5 shadow-sm border rounded-5  bg-white">
                        <h2 className="text-center mb-4 ">Login Form</h2>
                        <form>
                            <div className="mb-3 form-group">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control border" name='email' onChange={handelChange} id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control border" name='password' onChange={handelChange} id="exampleInputPassword1" required />
                            </div>
                            <p className="small"><Link className="textColor" to="/forget">Forgot password?</Link></p>
                            <div className="d-grid">
                                <button className="btn btn-primary" onClick={handelSubmit} type="submit">Login</button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <p className="mb-0  text-center">Don't have an account? <Link to="/signup" className="textColor fw-bold">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Login