import { useEffect, useRef, useState } from 'react'
import sendSvg from '../../assets/icons/send.svg'
import style from './signup.module.css'
import { LoginDialog } from '../dialogs/dialogs';


const Signup = () =>{
    //handles dialog displays
    const [login, setLogin]= useState(false);
    const [signup, setSignup]= useState(false);
    const loginRef = useRef(null);
    const signupRef= useRef(null) ; 

    const logInPrompt = () =>{
        setLogin(true);
    }
    const signUpPrompt = () =>{
        setSignup(true);
    }
    useEffect(()=>{
        if(!login) return
        loginRef.current?.showModal()
        
    },[login])
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
                <LoginDialog referance={loginRef}/>                
            ):(<></>)}
            {signup? (
                <dialog ref={signupRef}>
                    <div>Signup</div>
                </dialog>           
            ):(<></>)}
        </>
    )
}

export{
    Signup
}