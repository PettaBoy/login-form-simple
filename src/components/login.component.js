import React, { useState } from "react"

function LoginForm({ Login, error }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const submitHandler = (e) => {
    e.preventDefault()
    Login(user)
  }

  return(
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" onChange={(e)=>setUser({...user, name: e.target.value})} value={user.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={(e)=>setUser({...user, email: e.target.value})} value={user.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e)=>setUser({...user, password: e.target.value})} value={user.password}/>
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}

export default LoginForm;