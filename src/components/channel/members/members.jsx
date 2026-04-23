import { GroupIcon, LeftArrow, RightArrow } from '../../iconhelper/iconHelper';
import style from './members.module.css'
import { useState } from 'react';
const MembersBar = ({data}) =>{
    const [channelView,setChannelView]=useState(true)
    
    const toggelChannelView=()=>{
        setChannelView(!channelView);
    }
    return(
        <div className={style.membersContainer}>
            <div className={`${style.groupMembers} 
            ${channelView? style.open: style.close}`}>

                <GroupIcon size={35} />
                Group members
                {data? (
                    data.map(member =>{
                        return(
                            <div key={member.id} style={member.is_mod? {color: 'green'}:{color: 'white'}}>
                                @{member.id}
                            </div>
                        )
                    })
                ):('no members yet')}
            </div>
            {!channelView? (
                <div className={style.closeChannels}>
                <LeftArrow size={40} fn={toggelChannelView}/>
                </div>  
            ):(
                <div className={style.openChannels}>
                <RightArrow size={40} fn={toggelChannelView}/> 
                </div>                       
            )}        
        </div>

    )
}
export{
    MembersBar
}