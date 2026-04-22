import { ReplyIcon, UserIcon } from '../../iconhelper/iconHelper'
import style from './chatlog.module.css'


const populateChat =(messages)=>{
    return messages.map( msg=>{
        return msg.reply_to? (
            <div key={msg.id} className={style.msgCardReply}>              
                <ReplyIcon  height={30}                                
                            color={'#27282c'} 
                            focusColor={'#eaebf1'}
                            className={style.replyIcon}
                            />
                <div className={style.replyMsg}>reply to {msg.reply_to}</div>
                <div className={style.msgSuthor}>
                    <UserIcon   size={30}
                                color={'#27282c'} 
                                focusColor={'#62646b'}/> @{msg.author_id}</div>
                <div className={style.msgDate}>{msg.created_at}</div>
                <div className={style.msgTxt}>{msg.content}</div>
            </div>
        ):(
            <div key={msg.id} className={style.msgCard}>
                <div className={style.msgSuthor}>
                    <UserIcon   size={30}
                                color={'#27282c'} 
                                focusColor={'#62646b'}/>@{msg.author_id}</div>
                <div className={style.msgDate}>{msg.created_at}</div>
                <div className={style.msgTxt}>{msg.content}</div> 
            </div> 
        )                   
    })
}
const ChatLog=({messages})=>{
    return(
        <>
        {populateChat(messages)}
        </>
    )
}
export{
    ChatLog
}
