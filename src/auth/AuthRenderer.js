import React from 'react'
import Input from './Input'

export default function AuthRenderer({changeState,register,login, errorCode}) {
  return (
<div className="grid-div" id="left-div">
      <h1>Sign Up</h1>
      {errorCode===409 ? <h1 className='error-txt'>Username already taken</h1> : null}
        <Input
        stateName="usernameReg"
        placeholder={"Username.."}
        changeState={changeState}
        />
  

    <Input
        stateName="passwordReg"
        placeholder={"Password.."}
        changeState={changeState}
        />

      <button className="btn auth-btn" onClick={() => register()}>Enter</button>
      <h1>Login</h1>
      {errorCode=== 401 ? <h1 className='error-txt'>Incorrect username or password</h1> : null}
      <Input
        stateName="usernameLogin"
        placeholder={"Username.."}
        changeState={changeState}
        />
    
        <Input
        stateName="passwordLogin"
        placeholder={"Password.."}
        changeState={changeState}
        />
    
      <button className="btn auth-btn" onClick={() => login()}>Enter</button>
    </div>
  )
}
