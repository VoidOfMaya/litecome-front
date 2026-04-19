import { useEffect, useRef, useState } from 'react'
import sendSvg from '../../assets/icons/send.svg'
import style from './signup.module.css'
import { LoginDialog, SignupDialog } from '../dialogs/dialogs';


const Signup = () =>{
    //handles dialog displays
    const [login, setLogin]= useState(false);
    const [signup, setSignup]= useState(false);
    const loginRef = useRef(null);
    const signupRef= useRef(null) ; 

    const logInPrompt = () =>{
        setLogin(true);
    }
    const handleLoginDialogClose = () =>{
        setLogin(false)
    }
    const signUpPrompt = () =>{
        setSignup(true);
    }
    const handleSignupDialogClose = () =>{
        setSignup(false);
    }
    useEffect(()=>{
        if(!login) return
        loginRef.current?.showModal()
        
    },[login])
    useEffect(()=>{
        if(!signup) return
        signupRef.current?.showModal()
        
    },[signup])
    return(
        <>
            <main className={style.signupMain}>
                <div className={style.signupLeft}>
                    <div style={{padding:'10px'}}
                        onClick={()=>signUpPrompt()}
                    >sign up </div>
                </div>
                <div className={style.signupRight}>
                    <div style={{fontSize: '28px'}}
                        onClick={()=>logInPrompt()}
                    > Log in &gt;</div>
                        <svg width="70" viewBox="0 0 24 24" fill="currentColor">
                            <path d='../../assets/icons/send.svg' />
                        </svg>
                </div>
            </main>
            {login? (
                <LoginDialog referance={loginRef} close={handleLoginDialogClose}/>                
            ):(<></>)}
            {signup? (
                <SignupDialog referance={signupRef} close={handleSignupDialogClose}/>         
            ):(<></>)}
        </>
    )
}

export{
    Signup
}