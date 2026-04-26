import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
import { MembersBar } from '../members/members';
import { useSwipeable} from 'react-swipeable';

const Channel = () =>{
    //handels sidebar interactive actions touch and click
    const [chnlMsgs, setChnlMsgs] = useState(null);

    const toggelMembersView=()=>{
        setViewMembers(!viewMembers);
    }
    const membersBar = useSwipeable({
        onSwipedLeft: () => setViewMembers(true),
        onSwipedRight: () => setViewMembers(false),
    });
    /*get data*/
    useEffect(()=>{
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