import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContex'

const EditUser = () => {
  const context = useContext(userContext);
  const { user, updateUser, getUserDetails } = context;
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line 
  }, []);
  const navigate = useNavigate();
  const [img, setImg] = useState()
  const [data, setData] = useState({ name: user.name, phone: user.phone, bio: user.bio })
  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handelImgChange = (e) => {
    setImg(e.target.files[0])
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    updateUser(data, img);
    navigate('/profile');

  }
  return (
    <>
      <div className="container">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="col-md-10 p-5 shadow-sm border rounded-5  bg-white">
            <h2 className="text-center mb-4 ">Update Profile </h2>
            <form >
              <div className="row">
                <div className="col-sm-6 mb-3 form-group">
                  <label htmlFor="nametext" className="form-label">Name </label>
                  <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={handelChange} aria-describedby="name" />
                </div>
                <div className="col-sm-6 mb-3 form-group">
                  <label htmlFor="phone" className="form-label">Phone </label>
                  <input type="tel" className="form-control" id="phonenumber" value={data.phone} onChange={handelChange} name='phone' aria-describedby="phonenumber" />
                </div>
                <div className="col-sm-6 mb-3 form-group">
                  <label htmlFor="biotext" className="form-label">Bio </label>
                  <input type="text" className="form-control" id="bio" name='bio' value={data.bio} onChange={handelChange} aria-describedby="bio" />
                </div>
                <div className="col-sm-6 form-group mb-3">
                  <label htmlFor="img" className="form-label">Profile Img </label>
                  <input type="file" name='photo' className='form-control' onChange={handelImgChange} />
                </div>
                <div className="col-sm-12 mb-3 form-group" >
                  <img src={img} alt={data.name} width={200} className='img-fluid ' />
                </div>
                <div className="col-sm-12 mb-3 form-group">
                  <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser