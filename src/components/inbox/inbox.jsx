import { useEffect } from "react";
import { useOutletContext } from "react-router-dom"
import { UserIcon } from "../iconhelper/iconHelper";
import style from './inbox.module.css';
const Inbox = () =>{
    const{inbox, handleCurrentChannel} = useOutletContext();

    const populateRequests = (requestArray) =>{
        return requestArray.map((request)=>{
            //console.log(request)
            return(
                <div key={request.id} className={style.card} >
                    {request.friend.photo? (
                        <img src={`${request.friend.photo}`}  alt="profile photo"/>
                    ):(
                        <UserIcon size={60} />
                    )}
                    <h2>{request.friend.name}</h2>
                    <div className={style.options}>
                        <button>accept</button>
                        <button>reject</button>
                    </div>
                </div>
            )
        })
    }
    useEffect(()=>{
        handleCurrentChannel(null)
    },[])
    return(
        <div>
            <div>
                <h1>Incoming</h1>
                <div>
                    {populateRequests(inbox)}
                </div>
                <h1>Outgoing</h1>                
            </div>
            <div>
                requests go here
            </div>

        </div>
    )
}
export{
    Inbox
}