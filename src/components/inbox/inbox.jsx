import { useEffect } from "react";
import { useOutletContext } from "react-router-dom"
const Inbox = () =>{
    const{inbox, handleCurrentChannel} = useOutletContext();

    useEffect(()=>{
        handleCurrentChannel(null)
        console.log(inbox)
    },[])
    return(
        <div>
            <div>
                <h1>Incoming</h1>
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