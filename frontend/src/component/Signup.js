import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertContext from '../context/alert/alertContext';
const Signup = () => {
    const context = useContext(alertContext);
    const { showAlert } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            showAlert('logout first','danger');
            navigate('/dash')
        }
        // eslint-disable-next-line
    }, [])

    const [img, setImg] = useState('');
    const [data, setData] = useState({ name: "", bio: "", email: "", password: "", cnfPassword: "", phone: "" });
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
            showAlert("Welcome", 'success');
            navigate('/dash');
        }
    }
    const handelChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handelImgChange = (e) => {
        setImg(e.target.files[0])
    }
    return (

        <>

            <div className="container ">
                <div className="vh-100 d-flex justify-content-center align-items-center signupPage ">
                    <div className="col-md-10 p-5 shadow-sm border rounded-5  bg-white">
                        <h2 className="text-center mb-4 ">Signup </h2>
                        <form>
                            <div className="row  ">
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="name-f">First Name</label>
                                    <input type="text" className="form-control" name="first_name" id="name-f" onChange={handelChange} placeholder="Enter your first name." required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" onChange={handelChange} placeholder="Enter your email." required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="tel">Phone</label>
                                    <input type="tel" name="phone" className="form-control" id="tel" onChange={handelChange} placeholder="Enter Your Contact Number." required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="bio">Bio</label>
                                    <input type="text" name="bio" className="form-control" onChange={handelChange} id="bio" placeholder="Enetr about your self." required />
                                </div>
                                <div className="col-sm-12 mb-3 form-group">
                                    <label htmlFor="img">Profile img</label>
                                    <input type="file" name="photo" className="form-control" onChange={handelImgChange} id="photo" placeholder="Re-enter your password." required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="Password" name="pass" className="form-control" id="pass" onChange={handelChange} placeholder="Enter your password." required />
                                </div>
                                <div className="col-sm-6 mb-3 form-group">
                                    <label htmlFor="pass2">Confirm Password</label>
                                    <input type="Password" name="cnfPassword" className="form-control" onChange={handelChange} id="pass2" placeholder="Re-enter your password." required />
                                </div>
                                <div className="col-sm-12 mb-3 form-group mb-0">
                                    <button disabled={data.pass !== data.cnfPassword} onClick={handelSubmit} className="btn btn-primary float-right">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup