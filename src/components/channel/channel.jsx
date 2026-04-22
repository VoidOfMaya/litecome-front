import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages, user, channels} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';

import { UserIcon, 
         FriendsIcon, 
         GroupIcon, 
         SearchIcon} from '../iconhelper/iconHelper';

const Channel = () =>{
    const [chnls, setChnls] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);
    const [focus, setFocus] = useState(false);

    const populateChnls = (data) =>{
        return data.map(chnl=>{
            return(
                <div key={chnl.id} className={style.channelOption}>
                    <div>{chnl.id}</div>
                    <div>{chnl.name}</div>
                </div>
            )
        })
    }

    /*get data*/
    useEffect(()=>{
        /* simulating server data with a mock data file*/
        setChnlMsgs(messages);
        setChnls(channels);
        
    },[])
    return(
        <main className={style.channel}>
            <div className={style.userNav}> 
                <UserIcon color={'#27282c'} focusColor={'#62646b'} size={30} />
                <FriendsIcon color={'#27282c'} focusColor={'#62646b'} size={30} />
                <GroupIcon color={'#27282c'} focusColor={'#62646b'} size={30} />
                <SearchIcon color={'#27282c'} focusColor={'#62646b'} size={30} />
            </div>
            <div className={style.sideNav}>
                {chnls? (
                    populateChnls(chnls)
                ):(
                    'no channels'
                )}

            </div>
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