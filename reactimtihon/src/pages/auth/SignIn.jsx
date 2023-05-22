import { useState } from "react"
import { useNavigate } from "react-router-dom"

import s from "./SignIn.module.scss"
import { redirect } from "react-router-dom"

export const SignIn = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate()
  
  const onSubmit = e =>{
    e.preventDefault()
    if (email === "eve.holt@reqres.in" && password === "pistol"){
      navigate("/gen")
      setError("")
    }else{
      setError("Chek your email or password and try again")
    }
  }
  return (
    <main>
      <form >
        <div className={s["main-form"]}>
          <div className={s["main-form_header"]}>Sign In</div>
          <div className={s["main-form_address"]}>
            <p>Email Address</p>
            <input type="text" placeholder="" onChange={({target})=>setEmail(target.value)} />
          </div>
          <div className={s["main-form_password"]}>
            <p>Your Password</p>
            <input type="password" placeholder="" onChange={({target})=>setPassword(target.value)} />
          </div>
          <div className={s["for-error"]}>{error}</div>
          <button onClick={onSubmit} type="button">Sign In</button>
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
