import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages, user, channels, channel_members} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
import { SideBar } from './sidebar/sidebar';
import { GroupIcon, LeftArrow, RightArrow } from '../iconhelper/iconHelper';

const Channel = () =>{
    const [chnls, setChnls] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);
    const [members, setMembers] = useState(null);
    // can be { closed, partial, open}
    const [sidebarOpen, setSidebarOpen] = useState('partial');

    const testFn=()=>{
        console.log(`button has been clicked!`)
    }
    /*get data*/
    useEffect(()=>{
        /* simulating server data with a mock data file*/
        setChnlMsgs(messages);
        setChnls(channels);
        setMembers(channel_members)
        
    },[])
    return(
        <main className={style.channel}>
            <SideBar chnls={chnls} className={style.sidebarContainer}/>
            <div className={style.chatDisplay}> 
                {chnlMsgs? (
                    <ChatLog messages={chnlMsgs} />                       
                ):('no chat open!')}
                </div>
            <ChatInterface />
            <div className={style.membersBtn}>
                <LeftArrow size={40} />
            </div>
            <div className={style.groupMembers}>
                <GroupIcon size={35} />
                Group members
                {members? (
                    members.map(member =>{
                        return(
                            <div key={member.id} style={member.is_mod? {color: 'green'}:{color: 'white'}}>
                                @{member.id}
                            </div>
                        )
                    })
                ):('no members yet')}
            </div>
        </main>
        
    )
}
export{
    Channel
}