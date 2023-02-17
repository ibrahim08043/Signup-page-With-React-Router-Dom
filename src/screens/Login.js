import React, { useState } from 'react'
import "../App.css"
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state)
  function login() {
    let log = {
      frName: location.state.frName,
      lsname: location.state.lsname,
      Email: location.state.Email
    }
    if (location.state.Email == email && location.state.password == pass) {
      navigate("/home", {
        state: log
      })
    } else {
      alert("Please Give correct Password and Email")
    }

  }


  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setemail(e.target.value)} type={'email'} placeholder="Email address" />
      <br />
      <br />
      <input onChange={(e) => setpass(e.target.value)} maxLength='11' type={'password'} placeholder="Password" />
      <br />
      <br />
      <button onClick={login}>Login</button>
      <br />
      <br />
      Not have an account click to <button onClick={() => navigate("/")}>Signup</button>


    </div>
  )
}

export default Login