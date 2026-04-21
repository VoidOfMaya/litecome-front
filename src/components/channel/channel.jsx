import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
const Channel = () =>{
    const [channels, setChannels] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);

    /*get data*/
    useEffect(()=>{
        /* simulating server data with a mock data file*/
        setChnlMsgs(messages)
        
    },[])
    return(
        <main className={style.channel}>
            <div className={style.sideNav}>Channel goes here</div>
            <div className={style.chatDisplay}> 
                {chnlMsgs? (
                    <ChatLog messages={chnlMsgs} />                       
                ):('no chat open!')}
                </div>
            <ChatInterface />
        </main>
        
    )
}
export{
    Channel
}