import React, { useState } from 'react'
import userContext from './userContex'
import axios from 'axios'

const UserState = (props) => {

    const [user, setUser] = useState({})
    const createUser = async (data, img) => {
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
        }
    }
    const getUserDetails = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/userdetails`, {
            method: 'Get', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            // body data type must match "Content-Type" header
        });
        const data = await response.json();
        setUser(data);

    }
    const userLogin = async (credientials) => {
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credientials.email, password: credientials.password })
        });
        const json = await response.json()
        // console.log(json);
        // console.log(json.authToken);
        if (json.sucess) {
            localStorage.setItem('auth-token', json.authToken);
        }

    }
    const updateUser = async (data, img) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('bio', data.bio);
        formData.append('photo', img);

        const response = await axios.patch(`http://localhost:8000/api/auth/updateuser`, formData, {
            headers: {
                'auth-token': localStorage.getItem('auth-token')
            }
        })
        console.log(response)

    }
    const updatePassword = async (credientials) => {
        const response = await fetch("http://localhost:8000/api/auth/updatepassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ oldpassword: credientials.oldPassword, newpassword: credientials.newPassword })
        });
        const json = await response.json();
        console.log(json);

    }
    return (<userContext.Provider value={{ user, createUser, getUserDetails, userLogin, updateUser, updatePassword }}>
        {props.children}
    </userContext.Provider>)
}

export default UserState