import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const ResetPassword = () => {
    let { token } = useParams();
    let navigate=useNavigate()
    const [password, setPassword] = useState('')
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
            body: JSON.stringify({ password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            navigate('/login');
        }

    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" className="form-control" name='password' onChange={handelChange} id="exampleInputPassword1" />
                </div>

                <div>
                    <button type="submit" onClick={handelSubmit} className="btn btn-primary ">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default ResetPassword