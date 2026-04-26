import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Channel = () =>{
    //context
    const{ auth }= useOutletContext();
    const direct = useNavigate();
    //handels sidebar interactive actions touch and click
    const [chnlMsgs, setChnlMsgs] = useState(null);
    /*get data*/
    useEffect(()=>{
        if(!auth) direct('/')
        setChnlMsgs(messages);
        
    },[])
    return(
        <main className={style.channel}>
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