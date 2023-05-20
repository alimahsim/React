import s from "./SignIn.module.scss"

export const SignIn = () => {
  return (
    <main>
      <div className={s["main-form"]}>
        <div className={s["main-form_header"]}>Sign In</div>
        <div className={s["main-form_address"]}>
          <p>Email Address</p>
          <input type="text" placeholder=""  />
        </div>
        <div className={s["main-form_password"]}>
          <p>Your Password</p>
          <input type="password" placeholder=""  />
        </div>
        <button type="button">Sign In</button>
        <div className={s["main-form_forget"]}>
          <p>Forget Password?</p>
          <p>Don't have an account?<span>Sign Up</span></p>
        </div>
      </div>
      <div className={s["main-left"]}>
        <h4>Hey <br />
        Welcome <br />
        Back</h4>

      </div>
    </main>
  )
}
