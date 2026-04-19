import style from './dialogs.module.css'
const LoginDialog = ({referance})=>{
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
                        loginRef.current.close()
                    }}
                >Cancel</button>
                <button type='none'
                    onClick={()=>{loginRef.current.close()}}
                >Login</button>
            </form>
        </dialog>
    )
}

export{
    LoginDialog
}