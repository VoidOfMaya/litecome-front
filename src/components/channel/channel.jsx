import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages} from '../../mock/data'; // is a mock file simulating backend data
const Channel = () =>{
    const [channels, setChannels] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);

    /*maps messages to message component*/
    const displayMsgs=(msgs)=>{
        return msgs.map( msg=>{
            return msg.reply_to? (
                    <div key={msg.id} className={style.msgCardReply}>
                        <div className={style.replyMsg}>reply to {msg.reply_to}</div>
                        <div className={style.msgSuthor}>@{msg.author_id}</div>
                        <div className={style.msgDate}>{msg.created_at}</div>
                        <div className={style.msgTxt}>{msg.content}</div>
                    </div>
                ):(
                    <div key={msg.id} className={style.msgCard}>
                        <div className={style.msgSuthor}>@{msg.author_id}</div>
                        <div className={style.msgDate}>{msg.created_at}</div>
                        <div className={style.msgTxt}>{msg.content}</div> 
                    </div> 
                )
                           
        })
    }
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
                    displayMsgs(chnlMsgs)
                ):('no chat open!')}
                </div>
            <ChatInterface />
        </main>
        
    )
}
export{
    Channel
}