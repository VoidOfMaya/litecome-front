import { useState } from 'react'
import style from './dialogs.module.css'
import { useOutletContext, useNavigate } from 'react-router-dom';

const LoginDialog = ({referance, close})=>{
    const {setAuth}= useOutletContext();

    const handleSubmit = (formData) =>{
        e.preventDefault();
        const email = formData.get("Email");
        const password = formData.get("password");

        setAuth({ email, password });
    }
    return(
        <dialog ref={referance}>
            <div style={{gridArea:'title', justifySelf: 'center'}}>Log In</div>
            <form   method='none' 
                    style={{gridArea:'form'}}  
                    className={style.loginForm}
                    onSubmit={(e)=> {handleSubmit(e.target)}}
                    >
                <label for='Email'>Email: </label>
                <input type='email' id='Email' name='Email' placeholder="example@example.com" required></input>
                <label for='password'>Password: </label>
                <input type='password' id='password' name='password' placeholder="********" min='8' required></input>
                <button type='none'
                    onClick={(e)=>{
                        referance.current.close();
                        close()
                    }}
                >Cancel</button>
                <button type='none'
                    onClick={(e)=>{
                        e.preventDefault()
                        setAuth(e)
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
                <label for='Email'>Email :</label>
                <input  type='email' id='Email' name='Email' placeholder="email" required></input>

                <label for='firstName'>First name :</label>
                <input  type='text' id='firstName' name='firstName' placeholder="First name" min='3'max='12' required>
                </input>

                <label for='lastName'>Last name :</label>
                <input  type='text' id='lastName' name='lastName' placeholder="Last name" min='3' max='12' required>
                </input>

                <label for='password'>Password :</label>
                <input  type='password' id='password' name='password' placeholder="password" min='8' required
                        className={ data.password !== data.confirmPassword? style.invalidField : style.validField}
                ></input>

                <label for='confirmPass'>Confirm password :</label>
                <input  type='password' 
                        id='confirmPass'
                        name='confirmPass'
                        placeholder="Confirm password"
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