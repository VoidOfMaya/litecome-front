import { useState } from 'react'
import style from './dialogs.module.css'
const LoginDialog = ({referance, close})=>{

    return(
        <dialog ref={referance}>
            <div style={{gridArea:'title', justifySelf: 'center'}}>Log In</div>
            <form method='none' style={{gridArea:'form'}} className={style.loginForm}>
                <label>Email: </label>
                <input type='email'></input>
                <label>Password: </label>
                <input type='password'></input>
                <button type='none'
                    onClick={(e)=>{
                        e.preventDefault()
                        referance.current.close();
                        close()
                    }}
                >Cancel</button>
                <button type='none'
                    onClick={(e)=>{
                        e.preventDefault()
                        referance.current.close()
                        close()
                    }}
                >Login</button>
            </form>
        </dialog>
    )
}

const SignupDialog = ({referance, close}) =>{
    const [data, setData]= useState({
        name: null,
        email: null,
        password: null,
        confirmPassword:null
    })
    return(
        <dialog ref={referance}>
            <div style={{gridArea:'title', justifySelf: 'center'}}>Signup</div>

            <form method='none' style={{gridArea:'form'}} className={style.signupForm}>
                <label>Email :</label>
                <input  type='email' placeholder="email" required></input>

                <label>First name :</label>
                <input  type='text' placeholder="firstName" min='3'max='12' required>
                </input>

                <label>Last name :</label>
                <input  type='text' placeholder="lastName" min='3' max='12' required>
                </input>

                <label>Password :</label>
                <input  type='password' placeholder="password" min='8' required
                        className={ data.password !== data.confirmPassword? style.invalidField : style.validField}
                ></input>


                    <label>Confirm password :</label>
                    <input  type='password' 
                            placeholder="confirmPassword"
                            min='8'
                            required
                            onChange={(e)=>setData(prev=>({...prev, confirmPassword: e.target.value}))}
                            className={ data.password !== data.confirmPassword? style.invalidField : style.validField}
                    ></input>
                
                <button type='none'
                    onClick={(e)=>{
                        e.preventDefault()
                        referance.current.close();
                        close()
                    }}
                >Cancel</button>
                <button type='none'
                    onClick={(e)=>{
                        e.preventDefault()
                        referance.current.close()
                        close()
                    }}
                >Login</button>
            </form>
        </dialog>          
    )
}

export{
    LoginDialog,
    SignupDialog
}