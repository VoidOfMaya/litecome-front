import style from './chatinterface.module.css'
import sendMsg from '../../../assets/icons/send.svg'

const ChatInterface = () =>{
    return(
        <div className={style.chatInterface}>
            <button for='message' className={`${style.msgButton} ${style.rightBtn}`}>+</button>
            <div className={style.textWrapper}>
                <textarea id='message' name='message' className={style.msgTxtArea} placeholder='message @Group'>
                </textarea>
            </div>
            <button for='message' className={`${style.msgButton} ${style.leftBtn}`}>
                <img src={sendMsg}></img>
            </button>
        </div>
    )
}
export{
    ChatInterface
}