import { useState } from "react"
import { useNavigate } from "react-router-dom"

import s from "./SignIn.module.scss"
// import { redirect } from "react-router-dom"

export const SignIn = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate()
  
const onSubmit = e =>{
  e.preventDefault()
  const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
  };
  fetch('https://reqres.in/api/login', req)
      .then(response => response.json())
      .then(data =>{
        localStorage.setItem("token", data.token)
      });
    if (localStorage.getItem("token") === 'QpwL5tke4Pnpja7X4'){
      navigate("/home")
      setError("")
    }else{
      // navigate("/sign-in")
      setError("Invaid input! Chek your email or password and try again")
    }
    // console.log(localStorage.getItem('token'));
  }
  return (
    <main>
      <form >
        <div className={s["main-form"]}>
          <div className={s["main-form_header"]}>Sign In</div>
          <div className={s["main-form_address"]}>
            <p>Email Address</p>
            <input type="email" placeholder="Example: eve.holt@reqres.in" onChange={({target})=>setEmail(target.value)} />
          </div>
          <div className={s["main-form_password"]}>
            <p>Your Password</p>
            <input type="password" placeholder="Example: cityslicka" onChange={({target})=>setPassword(target.value)} />
          </div>
          <div className={s["for-error"]}>{error}</div>
          <button onClick={onSubmit} type="button"> Sign In</button>
          <div className={s["main-form_forget"]}>
            <p>Forget Password?</p>
            <p>Don't have an account?<span>Sign Up</span></p>
          </div>
        </div>
      </form>
      <div className={s["main-left"]}>
        <h4>Hey <br />
        Welcome <br />
        Back</h4>
      </div>
    </main>
  )
}

