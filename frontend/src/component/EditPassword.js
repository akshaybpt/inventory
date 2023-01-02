import React, { useContext, useState } from 'react'
import userContext from '../context/user/userContex';
const EditPassword = () => {
    const context = useContext(userContext)
    const { updatePassword } = context;
    const [credentials, setcredentials] = useState({ oldpassword: "", newpassword: "" })
    const handelChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handelSubmit = (e) => {
        e.preventDefalut();
        updatePassword();
    }
    return (
        <div>
            <h3> Edit Password</h3>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Old Password</label>
                    <input type="password" className="form-control" name='oldpassword' onChange={handelChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" className="form-control" name='newoldpassword' onChange={handelChange} id="exampleInputPassword1" />
                </div>
                <div>
                    <button type="submit" onClick={handelSubmit} className="btn btn-primary   ">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditPassword