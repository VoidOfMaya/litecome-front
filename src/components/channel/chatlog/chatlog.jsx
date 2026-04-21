import style from './chatlog.module.css'


const populateChat =(messages)=>{
    return messages.map( msg=>{
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
const ChatLog=({messages})=>{
    return(
        <div className={style.chatWrapper}>
        {populateChat(messages)}
        </div>
    )
}
export{
    ChatLog
}
