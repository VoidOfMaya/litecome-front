import { useState } from 'react'
import style from './channel.module.css'
import sendMsg from '../../assets/icons/send.svg'
const Channel = () =>{
    const [channels, setChannels] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(<div>no chat open!</div>)
    return(
        <main className={style.channel}>
            <div className={style.sideNav}>Channel goes here</div>
            <div className={style.chatDisplay}> such emptieness,select a chat and start chattering</div>
            <div className={style.chatInterface}>
                <button for='message' className={`${style.msgButton} ${style.rightBtn}`}>+</button>
                <textarea id='message' name='message' className={style.msgTxtArea} placeholder='message @Group'>
                </textarea>
                <button for='message' className={`${style.msgButton} ${style.leftBtn}`}>
                    <img src={sendMsg}></img>
                </button>
            </div>
        </main>
        
    )
}
export{
    Channel
}