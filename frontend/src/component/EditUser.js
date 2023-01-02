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
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="nametext" className="form-label">Name </label>
          <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={handelChange} aria-describedby="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone </label>
          <input type="tel" className="form-control" id="phonenumber" value={data.phone} onChange={handelChange} name='phone' aria-describedby="phonenumber" />
        </div>
        <div className="mb-3">
          <label htmlFor="biotext" className="form-label">Bio </label>
          <input type="text" className="form-control" id="bio" name='bio' value={data.bio} onChange={handelChange} aria-describedby="bio" />
        </div>

        <img src={img} alt={data.name} width={200} className='img-fluid mb-3' />
        <div className="form-group mb-3">
          <input type="file" name='photo' onChange={handelImgChange} />
        </div>
        <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default EditUser