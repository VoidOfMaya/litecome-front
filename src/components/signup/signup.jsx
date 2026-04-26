import { useEffect, useRef, useState } from 'react'
import {SendIcon} from '../iconhelper/iconHelper';
import style from './signup.module.css'
import { LoginDialog, SignupDialog } from '../dialogs/dialogs';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Signup = () =>{
    //context
    const direct= useNavigate();
    const {auth}=useOutletContext();
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
    useEffect(()=>{
        if(auth) direct('/chatter')
    },[])
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
                    > Log in</div>
                        <SendIcon size={50} color={'white'} focusColor={'#E84545'}/>
                </div>
            </main>
            {login? (
                <LoginDialog referance={loginRef} 
                             close={handleLoginDialogClose} 
                            />                
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