import { useState } from 'react'
import style from './dialogs.module.css'
import { useOutletContext, useNavigate } from 'react-router-dom';

const LoginDialog = ({referance, close})=>{
    const {onLoginSuccess}= useOutletContext();

    const handleSubmit = (e) =>{
        const formData = new FormData(e.target)
        const email = formData.get("Email");
        const password = formData.get("password");
        onLoginSuccess(email, password);
    }
    return(
        <dialog ref={referance}>
            <div style={{gridArea:'title', justifySelf: 'center'}}>Log In</div>
            <form 
                    style={{gridArea:'form'}}  
                    className={style.loginForm}
                    onSubmit={(e)=> {
                        e.preventDefault();
                        handleSubmit(e);
                        referance.current.close();
                        close()
                    }}
                    >
                <label htmlFor='Email'>Email: </label>
                <input type='email' id='Email' name='Email' placeholder="example@example.com" required></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' placeholder="********" min='8' required></input>
                <button type='button'
                    onClick={()=>{
                        referance.current.close();
                        close()
                    }}
                >Cancel</button>
                <button type='submit'>
                    Login
                </button>
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

            <form   style={{gridArea:'form'}} 
                    className={style.signupForm}
                    onSubmit={(e)=>{
                        e.preventDefault();
                        referance.current.close()
                        close()
                    }}>
                <label htmlFor='Email'>Email :</label>
                <input  type='email' id='Email' name='Email' placeholder="email" required></input>

                <label htmlFor='firstName'>First name :</label>
                <input  type='text' id='firstName' name='firstName' placeholder="First name" min='3'max='12' required>
                </input>

                <label htmlFor='lastName'>Last name :</label>
                <input  type='text' id='lastName' name='lastName' placeholder="Last name" min='3' max='12' required>
                </input>

                <label htmlFor='password'>Password :</label>
                <input  type='password' id='password' name='password' placeholder="password" min='8' required
                        className={ data.password !== data.confirmPassword? style.invalidField : style.validField}
                ></input>

                <label htmlFor='confirmPass'>Confirm password :</label>
                <input  type='password' 
                        id='confirmPass'
                        name='confirmPass'
                        placeholder="Confirm password"
                        min='8'
                        required
                        onChange={(e)=>setData(prev=>({...prev, confirmPassword: e.target.value}))}
                        className={ data.password !== data.confirmPassword? style.invalidField : style.validField}
                ></input>
                
                <button type='button'
                    onClick={(e)=>{
                        e.preventDefault()
                        referance.current.close();
                        close()
                    }}
                >Cancel</button>
                <button type='submit'>
                    Signup
                </button>
            </form>
        </dialog>          
    )
}

export{
    LoginDialog,
    SignupDialog
}