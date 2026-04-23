import { GroupIcon, LeftArrow, RightArrow } from '../../iconhelper/iconHelper';
import style from './members.module.css'
import { useState } from 'react';
const MembersBar = ({data, membersView, triggerFn, swipAction}) =>{
    return(
        <div className={style.membersContainer} {...swipAction}>
            <div className={`${style.groupMembers} 
            ${membersView? style.open: style.close}`}>

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
            {!membersView? (
                <div className={style.closeChannels}>
                <LeftArrow size={40} fn={triggerFn}/>
                </div>  
            ):(
                <div className={style.openChannels}>
                <RightArrow size={40} fn={triggerFn}/> 
                </div>                       
            )}        
        </div>

    )
}
export{
    MembersBar
}