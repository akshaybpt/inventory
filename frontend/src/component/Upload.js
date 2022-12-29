import { useState } from "react"
import React from 'react';
import axios from 'axios';


const Upload = () => {
    const [profileImg, setprofileImg] = useState('')

var imgdata;
    const handelImgSubmit = async (e) => {
        e.preventDefault()
         const formData = new FormData()
         formData.append('photo', profileImg)
         axios.post("http://localhost:8000/api/photo/upload", formData, {
         }).then(res => {
             console.log(res)
             console.log(res.data.filename);
             imgdata=res.data.filename;
             console.log(imgdata);
         })
         
    }
    const handelImgChange = (e) => {
        setprofileImg(e.target.files[0]);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <form >
                        <div className="form-group">
                            <input type="file" onChange={handelImgChange} />
                            <button className="btn btn-primary" onClick={handelImgSubmit} type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Upload