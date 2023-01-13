import React from 'react'
import { useContext } from 'react';
import alertContext from '../context/alert/alertContext';
const Alert = () => {
  const context = useContext(alertContext)
  const { alert } = context
  return (
    <>
      <div style={{ height: '40px' ,position:'fixed' }} >
        {alert && <div className='container-fluid'>
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{alert.msg}</strong>
          </div>
        </div>}
      </div>
    </>
  )
}

export default Alert