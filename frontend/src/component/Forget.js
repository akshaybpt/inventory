import React,{useState} from 'react';


const Forget = () => {

const [email, setEmail] = useState('');



    const handelChange=(e)=>{
setEmail(e.target.value)
    }
    const handelSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/forgetpassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        });
        const json =await response.json();
        console.log(json);
       
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={handelChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" onClick={handelSubmit} className="btn btn-primary ">Submit</button>
            </form>
        </div>
    )
}

export default Forget