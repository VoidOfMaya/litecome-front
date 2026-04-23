import { useEffect, useState } from 'react';
import style from './channel.module.css';
import { ChatInterface } from './chatInterface/chatinterface';
import {messages, channels, channel_members} from '../../mock/data'; // is a mock file simulating backend data
import { ChatLog } from './chatlog/chatlog';
import { SideBar } from './sidebar/sidebar';
import { MembersBar } from './members/members';
import { useSwipeable} from 'react-swipeable';

const Channel = () =>{
    const [chnls, setChnls] = useState(null);
    const [chnlMsgs, setChnlMsgs] = useState(null);
    const [members, setMembers] = useState(null);
    const [channelView,setChannelView]=useState(true)
    const [viewMembers,setViewMembers]=useState(true)
    
    //handels sidebar interactive actions touch and click
    const toggelChannelView=()=>{
        setChannelView(!channelView);
    }
    const sidebar = useSwipeable({
        onSwipedLeft: () => setChannelView(false),
        onSwipedRight: () => setChannelView(true),
    });
     //handels sidebar interactive actions touch and click
    const toggelMembersView=()=>{
        setViewMembers(!viewMembers);
    }
    const membersBar = useSwipeable({
        onSwipedLeft: () => setViewMembers(true),
        onSwipedRight: () => setViewMembers(false),
    });
    /*get data*/
    useEffect(()=>{
        /* simulating server data with a mock data file*/
        setChnlMsgs(messages);
        setChnls(channels);
        setMembers(channel_members)
        
    },[])
    return(
        <main className={style.channel}>
            <SideBar channelView={channelView} 
                triggerFn={toggelChannelView} 
                chnls={chnls} 
                className={style.sidebarContainer}
                swipAction={sidebar}
            />
            <div className={style.chatDisplay}> 
                {chnlMsgs? (
                    <ChatLog messages={chnlMsgs} />                       
                ):('no chat open!')}
                </div>
            <ChatInterface />
            <MembersBar data={members} 
                        membersView={viewMembers}
                        triggerFn={toggelMembersView} 
                        swipAction={membersBar}
            />
        </main>
        
    )
}
export{
    Channel
}