import React, { useState } from 'react'
import alertContext from './alertContext'
const AlertState = (props) => {
    const [alert, setAlert] = useState({ msg: "", type: "" })
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }
    return (<alertContext.Provider value={{ alert, setAlert,showAlert }}>
        {props.children}
    </alertContext.Provider>)
}

export default AlertState