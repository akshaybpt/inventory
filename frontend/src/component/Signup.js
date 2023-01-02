import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const navigate = useNavigate();
    if (localStorage.getItem('auth-token')) {
        localStorage.removeItem('auth-token')
    }

    const [img, setImg] = useState('');
    const [data, setData] = useState({ name: "", bio: "", email: "", password: "", phone: "" });
    const handelSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('phone', data.phone);
        formData.append('bio', data.bio);
        formData.append('photo', img);
        const response = await axios.post("http://localhost:8000/api/auth/createuser", formData, {
        })
        //console.log(response);
        if (response.data.sucess) {
            localStorage.setItem('auth-token', response.data.authToken);
            navigate('/')
        }
    }
    const handelChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handelImgChange = (e) => {
        setImg(e.target.files[0])
    }
    return (
        <div>
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="nametext" className="form-label">Name </label>
                                    <input type="text" className="form-control" id="name" name='name' onChange={handelChange} aria-describedby="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" onChange={handelChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' onChange={handelChange} id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone </label>
                                    <input type="tel" className="form-control" id="phonenumber" onChange={handelChange} name='phone' aria-describedby="phonenumber" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="biotext" className="form-label">Bio </label>
                                    <input type="text" className="form-control" id="bio" name='bio' onChange={handelChange} aria-describedby="bio" />
                                </div>
                                <div className="form-group">
                                    <input type="file" name='photo' onChange={handelImgChange} />
                                </div>
                                <Link type="submit" onClick={handelSubmit} className="btn btn-primary" to='/'>Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Signup