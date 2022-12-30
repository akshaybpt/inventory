import React,{useState} from 'react'
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
        axios.post("http://localhost:8000/api/auth/createuser", formData, {
        }).then(res => {
            console.log(res)
            // console.log(res.data.profileImg);
        })
    }
    const getUserDetails = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/userdetails`, {
            method: 'Get', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYmYyOGJlMGM2ZWVkZjVmMWUxZTYzIn0sImlhdCI6MTY3MjIxMzM3Mn0.MaOojZs6Mp8yMewY8uy23LuquqX3Y8QmR-SuJH3_cwA'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            // body data type must match "Content-Type" header
        });
        const data=await response.json();
        setUser(data);

    }
    return (<userContext.Provider value={{user,createUser,getUserDetails }}>
        {props.children}
    </userContext.Provider>)
}

export default UserState