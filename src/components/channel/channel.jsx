import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages, user, channels} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
import { SideBar } from './sidebar/sidebar';

const Channel = () =>{
    const [chnls, setChnls] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);
    const [focus, setFocus] = useState(false);


    /*get data*/
    useEffect(()=>{
        /* simulating server data with a mock data file*/
        setChnlMsgs(messages);
        setChnls(channels);
        
    },[])
    return(
        <main className={style.channel}>
            <SideBar chnls={chnls} />
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