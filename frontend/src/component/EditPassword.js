import React, { useContext, useState } from 'react'
import userContext from '../context/user/userContex';
const EditPassword = () => {
    const context = useContext(userContext)
    const { updatePassword } = context;
    const [credentials, setCredentials] = useState({ oldPassword: "", newPassword: "", cnfNewPassword: "" })
    const handelChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handelSubmit = async (e) => {
        e.preventDefalut();
        console.log(credentials);
        updatePassword(credentials);
    }
    return (
        <>
            <div className='container'>
                <div className="vh-100 d-flex justify-content-center align-items-center loginPage ">
                    <div className="col-md-5 p-5 shadow-sm border rounded-5  bg-white">
                        <h2 className="text-center mb-4 ">Update Password</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Old Password</label>
                                <input type="password" className="form-control" name='oldPassword' onChange={handelChange} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">New Password</label>
                                <input type="password" className="form-control border" name='newPassword' onChange={handelChange} id="exampleInputPassword2" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control border" name='cnfNewPassword' onChange={handelChange} id="exampleInputPassword3" required />
                            </div>
                            <div className="d-grid">
                                <button disabled={credentials.newPassword !== credentials.cnfNewPassword} className="btn btn-primary" onClick={handelSubmit} type="submit">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPassword