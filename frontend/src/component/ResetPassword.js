import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const ResetPassword = () => {
    let { token } = useParams();
    let navigate = useNavigate()
    const [password, setPassword] = useState({ newPassword: "", cnfNewPassword: "" })
    const handelChange = (e) => {
        setPassword(e.target.value)
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/resetpassword/${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(password.newPassword)
        });
        const json = await response.json();
        //console.log(json);
        if (json.success) {
            navigate('/login');
        }

    }
    return (
        <>
            <div className='container'>
                <div className="vh-100 d-flex justify-content-center align-items-center loginPage ">
                    <div className="col-md-5 p-5 shadow-sm border rounded-5  bg-white">
                        <h2 className="text-center mb-4 ">Reset Password</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                <input type="password" className="form-control border" name='newPassword' onChange={handelChange} id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control border" name='cnfNewPassword' onChange={handelChange} id="exampleInputPassword2" required />
                            </div>
                            <div className="d-grid">
                                <button disabled={password.newPassword !== password.cnfNewPassword} className="btn btn-primary" onClick={handelSubmit} type="submit">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword