import React, { useEffect,useState } from 'react'

const ViewUser = () => {

    useEffect(() => {
        getDetails();
    }, [])
    const [first, setfirst] = useState({})
    const getDetails = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/userdetails`, {
            method: 'Get', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYmYyOGJlMGM2ZWVkZjVmMWUxZTYzIn0sImlhdCI6MTY3MjIxMzM3Mn0.MaOojZs6Mp8yMewY8uy23LuquqX3Y8QmR-SuJH3_cwA'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            // body data type must match "Content-Type" header
        });
        const json = await response.json();
        setfirst(json);
        console.log(json);
    }
    
   
        return (
            <div>
                name: {first.name}

                <br />
               img:   <img src={first.photo} alt={first.photo} className="img-fluid" width={50}/>
               <br />
              
             
            </div>
        )
    }

    export default ViewUser