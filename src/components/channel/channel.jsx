import { useState } from 'react'
import style from './channel.module.css'
const Channel = () =>{
    const [channels, setChannels] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(<div>no chat open!</div>)
    return(
        <main className={style.channel}>
            <div className={style.sideNav}>Channel goes here</div>
            <div className={style.chatDisplay}> such emptieness,select a chat and start chattering</div>
            <div className={style.chatInterface}>chat submit</div>
        </main>
        
    )
}
export{
    Channel
}