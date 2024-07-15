import React from 'react'

function Alert({alert}) {

  const capitalise=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalise(alert.type)}</strong>: {alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default Alert